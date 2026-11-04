@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js was not found on this computer.
  echo         Please install Node.js 18 or newer from https://nodejs.org/
  echo         Then restart this script.
  pause
  exit /b 1
)

echo [OK] Node.js detected:
node --version
npm --version

if not exist "node_modules" (
  echo [INFO] node_modules folder not found - installing dependencies...
  call npm install
)

echo.
echo [INFO] Starting the React development server...
echo.

call npx react-scripts start

echo.
echo [DONE] The development server has stopped.
pause
