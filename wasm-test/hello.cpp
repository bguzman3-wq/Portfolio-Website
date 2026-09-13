#include <emscripten.h>

extern "C" {

    EMSCRIPTEN_KEEPALIVE
    int addNumbers(int a, int b){
        return a + b;

    }
}