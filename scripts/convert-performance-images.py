from pathlib import Path
from PIL import Image

root = Path('public')
assets = [
    root / 'images/reflex/reflex-slider1.jpg',
    root / 'videos/ctseg-trade-coordination-poster.jpg',
]
for source in assets:
    if not source.exists():
        continue
    target = source.with_suffix('.webp')
    with Image.open(source) as image:
        image.save(target, 'WEBP', quality=82, method=6)
    print(f'{source} -> {target} ({target.stat().st_size} bytes)')
