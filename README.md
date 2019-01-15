# electron-snapsvg-animator

This is a Plugin for ease the use of Animate CC exported animated SVG inside electron applications. It makes use of the Snap.svg javascript library and Snap.svg Animator to render content.

## Usage:

Include the addon in your renderer process.
```
const svgAnimationManager  = require('electron-snapsvg-animator')
```

Load an exported SVG animation .json file. Expecify FPS, width, height, absolute path
```
svgAnimationManager.loadAnimation(60, 150, 150, path.resolve(__dirname, 'example_animation.json'))
```

Attach the animation to a DOM object by passing it's id tag.
```
svgAnimationManager.addAnimation("div-mainContainer")
```

You can add aditional CSS styles.
```
svgAnimationManager.setStyle("opacity", "0.5")
```

Remove the animation when you dont need it.
```
svgAnimationManager.removeAnimation()
```

## TODO:

- Handle multiple animation files.
