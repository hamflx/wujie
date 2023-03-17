$scriptPath = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Definition)

Write-Output "Deleting $scriptPath/lib ..."
Remove-Item -Recurse -Force -ErrorAction Ignore "$scriptPath/lib"

Write-Output "Deleting $scriptPath/esm ..."
Remove-Item -Recurse -Force -ErrorAction Ignore "$scriptPath/esm"

Write-Output "Building lib ..."
npm run lib

Write-Output "Building esm ..."
npm run esm

npx tsc
