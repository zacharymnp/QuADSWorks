#include <iostream>
#include "src/html_generator.h"
#include "src/catalog_scraper.h"

using namespace std;

int main(int argc, char** argv) {
    //TODO: remember how arguments work
    if (argc != 3) {
        cerr << "Usage: " << argv[0] <<endl;
        return 1;
    }
    string dataDirectory = argv[1];
    string programsFile = argv[2];

    return 0;
}