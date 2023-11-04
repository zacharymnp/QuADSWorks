cmake_minimum_required(VERSION 3.26)
project(QuADSWorks)

set(CMAKE_CXX_STANDARD 17)

add_executable(QuADSWorks
        src/catalog_scraper.cpp
        src/catalog_scraper.h
        src/html_generator.cpp
        src/html_generator.h
        main.cpp)
