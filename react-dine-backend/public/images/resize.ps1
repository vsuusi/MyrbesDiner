# script to automate the creation of smaller version of images for smooth loading

$inputFolderPath = "C:\Projects\ReactDine\2023-wk47-react-project-vsuusi\react-dine-backend\public\images"

$outputFolderPath = "C:\Projects\ReactDine\2023-wk47-react-project-vsuusi\react-dine-backend\public\images"

Get-ChildItem -Path $inputFolderPath -Filter *.jpg | ForEach-Object {
    $outputFileName = "$($_.BaseName)_small$($_.Extension)"

    $outputFilePath = Join-Path $outputFolderPath $outputFileName

    & ffmpeg -i $_.FullName -vf "scale=20:-1" $outputFilePath
}

Write-Host "Image resizing complete."
