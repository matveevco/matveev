for file in *.png *.jpg; do
  extension="${file##*.}"
  filename="${file%.*}"
  cwebp -q 90 "$file" -o "${filename}.webp"
done
