#include <emscripten.h>
#include <vector>
#include <cstdlib>

struct Particle {
    float x, y;
    float vx, vy;
};

std::vector<Particle> particles;
int canvasWidth = 800;
int canvasHeight = 400;

extern "C" {

EMSCRIPTEN_KEEPALIVE
void init(int count, int width, int height) {
    canvasWidth = width;
    canvasHeight = height;
    particles.clear();
    for (int i = 0; i < count; i++) {
        Particle p;
        p.x = static_cast<float>(rand() % width);
        p.y = static_cast<float>(rand() % height);
        p.vx = (static_cast<float>(rand() % 100) / 100.0f - 0.5f) * 1.2f;
        p.vy = (static_cast<float>(rand() % 100) / 100.0f - 0.5f) * 1.2f;
        particles.push_back(p);
    }
}

EMSCRIPTEN_KEEPALIVE
void step() {
    for (auto& p : particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvasWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvasHeight) p.vy *= -1;
    }
}

EMSCRIPTEN_KEEPALIVE
float getX(int i) { return particles[i].x; }

EMSCRIPTEN_KEEPALIVE
float getY(int i) { return particles[i].y; }

EMSCRIPTEN_KEEPALIVE
int getCount() { return particles.size(); }

}