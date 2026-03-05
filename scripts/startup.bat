@echo off
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890
echo The http_proxy is set to http://127.0.0.1:7890
bundle exec jekyll serve 