set NODE_ENV=production
cmd.exe /c ".\node_modules\.bin\webpack --progress"
rem pause
.\node_modules\.bin\lite-server
