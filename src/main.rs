use rand::distributions::Alphanumeric;
use rand::prelude::*;
#[allow(dead_code)]
#[derive(Debug)]

enum Value {
    Int(i32),
    Long(i64),
    Float(f32),
    Double(f64),
}
enum Dype {
    Int,
    Long,
    Float,
    Double,
}
#[derive(Debug)]
enum Instruction {
    ConstLiteral(Value),
    AddConsts(Box<Instruction>, Box<Instruction>),
    SubConsts(Box<Instruction>, Box<Instruction>),
    MulConsts(Box<Instruction>, Box<Instruction>),
    SetLocal(String, Box<Instruction>),
    GetLocal(String),
    LoadMem(Box<Instruction>),
    StoreMem(Box<Instruction>, Box<Instruction>),
    IncrementTape(),
    DecrementTape(),
    IncrementCell(),
    DecrementCell(),
    Breakif(String, Box<Instruction>), //Label, Cond
    Loop(String, Box<Vec<Instruction>>, Box<Instruction>), // Label, instructions, Breaking point
    Meta(Box<Vec<Instruction>>),
    E_Q(Box<Instruction>, Box<Instruction>),
    PrintCell()
}
impl Instruction {
    fn compile(&self, params: &mut Vec<String>) -> String {
        match self {
            Instruction::ConstLiteral(d) => match d {
                Value::Int(i)    => format!("    i32.const {}", i),
                Value::Long(l)   => format!("    i64.const {}", l),
                Value::Float(f)  => format!("    f32.const {}", f),
                Value::Double(d) => format!("    f64.const {}", d),
            },

            Instruction::AddConsts(lhs, rhs) => {
                let lc = lhs.compile(params);
                let rc = rhs.compile(params);
                format!("{}\n    {} \n        i32.add", lc, rc)
            }
            Instruction::SubConsts(lhs, rhs) => {
                let lc = lhs.compile(params);
                let rc = rhs.compile(params);
                format!("{}\n    {}\n        i32.sub", lc, rc)
            }
            Instruction::MulConsts(lhs, rhs) => {
                let lc = lhs.compile(params);
                let rc = rhs.compile(params);
                format!("{};;lhs\n    {}\n        i32.mul", lc, rc)
            }

            Instruction::SetLocal(label, val) => {
                if !params.contains(label) {
                    params.push(label.to_string());
                }
                format!("{}\n        set_local ${}", val.compile(params), label,)
            }
            Instruction::GetLocal(label) => format!("    get_local ${}", label),
            Instruction::LoadMem(loc) => format!("{}\n        i32.load", loc.compile(params)),
            Instruction::StoreMem(loc, val) => {
                let compiled_val = val.compile(params);
                format!(
                    "{}\n    {}\n        i32.store",
                    loc.compile(params),
                    compiled_val
                )
            }
            Instruction::IncrementTape() => {
                let ptr = Instruction::GetLocal("ptr".to_string());
                let added = Instruction::AddConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(1))),
                );
                let inc = Instruction::SetLocal("ptr".to_string(), Box::new(added));
                format!("{}", inc.compile(params))
            }
            Instruction::DecrementTape() => {
                let ptr = Instruction::GetLocal("ptr".to_string());
                let added = Instruction::SubConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(1))),
                );
                let inc = Instruction::SetLocal("ptr".to_string(), Box::new(added));
                format!("{}", inc.compile(params))
            }
            Instruction::IncrementCell() => {
                let ptr = Instruction::GetLocal("ptr".to_string());
                let cell_location = Instruction::MulConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(32))),
                );
                let cell_value = Instruction::LoadMem(Box::new(cell_location));
                let cell_value_incremented = Instruction::AddConsts(
                    Box::new(cell_value),
                    Box::new(Instruction::ConstLiteral(Value::Int(1))),
                );
                let ptr = Instruction::GetLocal("ptr".to_string());
                let cell_location = Instruction::MulConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(32))),
                );
                let store_cell_value_incremented = Instruction::StoreMem(
                    Box::new(cell_location),
                    Box::new(cell_value_incremented),
                );
                store_cell_value_incremented.compile(params)
            }
            Instruction::DecrementCell() => {
                let ptr = Instruction::GetLocal("ptr".to_string());
                let cell_location = Instruction::MulConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(32))),
                );
                let cell_value = Instruction::LoadMem(Box::new(cell_location));
                let cell_value_incremented = Instruction::SubConsts(
                    Box::new(cell_value),
                    Box::new(Instruction::ConstLiteral(Value::Int(1))),
                );
                let ptr = Instruction::GetLocal("ptr".to_string());
                let cell_location = Instruction::MulConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(32))),
                );
                let store_cell_value_incremented = Instruction::StoreMem(
                    Box::new(cell_location),
                    Box::new(cell_value_incremented),
                );
                store_cell_value_incremented.compile(params)
            }
            Instruction::Breakif(label, cond) => {
                format!("{}\n        br_if ${}", cond.compile(params), label)
            }

            Instruction::Loop(label, instructions, breaking_point) => {
                let compiled_instructions = instructions
                    .iter()
                    .map(|i| i.compile(params))
                    .collect::<Vec<String>>()
                    .join("\n\n");
                format!(
                    "loop ${}\n        {}\n        {} ;; Breaking point\n        end",
                    label,
                    compiled_instructions,
                    breaking_point.compile(params)
                )
            }
            Instruction::Meta(body) => {
                let compiled_instructions = body
                    .iter()
                    .map(|i| i.compile(params))
                    .collect::<Vec<String>>()
                    .join("\n;; Meta");
                compiled_instructions
            }
            Instruction::E_Q(lhs, rhs) => format!(
                "{}\n        {}\n        i32.eq",
                lhs.compile(params),
                rhs.compile(params)
            ),
            Instruction::PrintCell() => {
                let ptr = Instruction::GetLocal("ptr".to_string());
                let cell_location = Instruction::MulConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(32))),
                );
                let cell_value = Instruction::LoadMem(Box::new(cell_location));
                format!("{}\n         call $log", cell_value.compile(params))
            }
        }
    }
}
struct Function<'f> {
    name: &'f str,
    instructions: Vec<Instruction>,
    acc: i32, // global: Global
}
struct Global<'g> {
    functions: Vec<Function<'g>>,
    memory: u8,
}
impl<'f> Function<'f> {
    fn compile(&self) -> String {
        let mut params: Vec<String> = vec![];
        let compiled_instructions = self
            .instructions
            .iter()
            .map(|i| format!("    {}", i.compile(&mut params)))
            .collect::<Vec<String>>()
            .join("\n\n\n\n");
        format!(
            "(func (export \"{}\") (local $ptr i32) \n{}\n    )",
            self.name, compiled_instructions
        )
    }
}
impl<'g> Global<'g> {
    fn new() -> Self {
        Self {
            functions: vec![],
            memory: 2,
        }
    }
    fn compile(&self) -> String {
        let compiled_functions = self
            .functions
            .iter()
            .map(|f| format!("    {}", f.compile()))
            .collect::<Vec<String>>()
            .join("\n");
        format!(
            "(module (memory {mem})\n{}\n)",
            compiled_functions,
            mem = self.memory,
        )
    }
    fn add_func(&mut self, func: Function<'g>) {
        self.functions.push(func);
    }
    fn set_mem(&mut self, mem: u8) {
        self.memory = mem;
    }
}

// Lifted partly from https://github.com/JoshMcguigan/nerve/blob/master/src/command.rs#L13

fn parse_block(mut remaining_source: &[u8]) -> (Vec<Instruction>, &[u8]) {
    let mut bf_commands = vec![];
    while let Some((byte, rem)) = remaining_source.split_first() {
        remaining_source = rem;
        let command = match byte {
            b'+' => Instruction::IncrementCell(),
            b'-' => Instruction::DecrementCell(),
            b'>' => Instruction::IncrementTape(),
            b'<' => Instruction::DecrementTape(),
            b'[' => {
                let (commands_in_the_loop, rem) = parse_block(remaining_source);
                remaining_source = rem;

                let ptr = Instruction::GetLocal("ptr".to_string());
                let cell_location = Instruction::MulConsts(
                    Box::new(ptr),
                    Box::new(Instruction::ConstLiteral(Value::Int(32))),
                );
                let cell_value = Instruction::LoadMem(Box::new(cell_location));
                let cell_value_eq_to_0 = Instruction::E_Q(
                    Box::new(cell_value),
                    Box::new(Instruction::ConstLiteral(Value::Int(0))),
                );

                let wcnimpl = vec![Instruction::SubConsts(
                    Box::new(Instruction::ConstLiteral(Value::Int(1))),
                    Box::new(cell_value_eq_to_0),
                )];
                let while_cell_ne_0 = Instruction::Meta(Box::new(wcnimpl));
                let label: String = thread_rng().sample_iter(&Alphanumeric).take(30).collect();
                let breaking_point =
                    Instruction::Breakif(label.clone(), Box::new(while_cell_ne_0));
                let lp = Instruction::Loop(
                    label,
                    Box::new(commands_in_the_loop),
                    Box::new(breaking_point),
                );
                lp
            }
            b']' => break,
            b'.' => Instruction::PrintCell(),
            // b'.' => Instruction::Output,
            // b',' => Instruction::Input,
            _ => continue,
        };

        bf_commands.push(command);
    }
    (bf_commands, remaining_source)
}

fn bf2wasm(input: String) -> String {
    let mut g = Global::new();
    // let mut i = vec![];
    let (commands, remaining_source) = parse_block(&input.as_bytes());
    // println!("commands = {:?}", commands);

    let xmain = Function {
        acc: 0,
        name: "xmain",
        instructions: commands,
    };
    g.add_func(xmain);
    g.set_mem(5);
    g.compile()
}
fn main() {
    // plan

    // tape is default initialized

    // have pointer

    // +  = (set_local $ptr (i32.add (get_local $ptr) (i32.const 1)))
    // -  = (set_local $ptr (i32.sub (get_local $ptr) (i32.const 1)))

    // loops
    /*
        (loop $label

        br_if ;;
    )

    */
    let i = "+-<.>";
    // println!("{}", i);
    println!("{}", bf2wasm(i.to_string()));
}
