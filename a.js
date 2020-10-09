
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 function $0() {
  var $0_1 = 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  label$1 : while (1) {
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$1
   }
   break label$1;
  };
  $0_1 = $0_1 + 1 | 0;
  label$2 : while (1) {
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$2
   }
   break label$2;
  };
  $0_1 = $0_1 - 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
  label$3 : while (1) {
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$3
   }
   break label$3;
  };
  $0_1 = $0_1 + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  label$4 : while (1) {
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$4
   }
   break label$4;
  };
  $0_1 = $0_1 - 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  label$5 : while (1) {
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$5
   }
   break label$5;
  };
  $0_1 = $0_1 + 1 | 0;
  label$6 : while (1) {
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$6
   }
   break label$6;
  };
  $0_1 = $0_1 - 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
  label$7 : while (1) {
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$7
   }
   break label$7;
  };
  $0_1 = $0_1 + 1 | 0;
  HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
  label$8 : while (1) {
   $0_1 = $0_1 - 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) + 1 | 0;
   $0_1 = $0_1 + 1 | 0;
   HEAP32[Math_imul($0_1, 32) >> 2] = (HEAP32[Math_imul($0_1, 32) >> 2] | 0) - 1 | 0;
   if (1 - ((HEAP32[Math_imul($0_1, 32) >> 2] | 0 | 0) == (0 | 0)) | 0) {
    continue label$8
   }
   break label$8;
  };
  $0_1 = $0_1 - 1 | 0;
 }
 
 var FUNCTION_TABLE = [];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "xmain": $0
 };
}

var memasmFunc = new ArrayBuffer(327680);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); }},memasmFunc);
export var xmain = retasmFunc.xmain;
