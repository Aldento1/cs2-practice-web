@echo off
echo Tworzenie struktury folderów dla projektu CS2 Hub...

:: Tworzenie folderów w public (na grafiki i wideo)
mkdir public\maps
mkdir public\videos

:: Tworzenie struktury Next.js App Router wewnątrz src
mkdir src\app\callouts
mkdir src\app\autoexec
mkdir src\components
mkdir src\lib

:: Tworzenie pustych plików (opcjonalnie, aby od razu widzieć strukturę)
type nul > src\app\layout.tsx
type nul > src\app\page.tsx
type nul > src\app\callouts\page.tsx
type nul > src\app\autoexec\page.tsx
type nul > src\lib\mapData.ts
type nul > src\lib\utils.ts

echo.
echo ======================================================
echo STRUKTURA UTWORZONA POMYŚLNIE!
echo ======================================================
echo Teraz mozesz wkleic kod komponentow do odpowiednich plikow.
pause