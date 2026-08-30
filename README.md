# Background SVG Change - Dynamic SVG Background Component

A dynamic SVG background change component built with JavaScript. Features smooth transitions, customizable patterns, and interactive effects.

## Features

- Dynamic SVG backgrounds
- Smooth transitions
- Customizable patterns
- Interactive effects
- Lightweight and fast
- Cross-browser compatible
- Easy to integrate

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/background-svg-change.git
   ```

2. Copy `bg-change.js` into your project

3. Include the script in your HTML:
   ```html
   <script src="bg-change.js"></script>
   ```

## Usage

### Basic Usage
```html
<!DOCTYPE html>
<html>
<head>
  <title>Background SVG Change</title>
  <script src="bg-change.js"></script>
</head>
<body>
  <div id="background-container"></div>
  <script>
    // Initialize background change
    BackgroundChange.init({
      container: '#background-container',
      patterns: ['pattern1.svg', 'pattern2.svg', 'pattern3.svg']
    });
  </script>
</body>
</html>
```

### With Different Patterns
```javascript
BackgroundChange.init({
  container: '#bg',
  patterns: [
    'waves.svg',
    'circles.svg',
    'geometric.svg',
    'organic.svg'
  ],
  transitionDuration: 1000,
  autoChange: true,
  changeInterval: 5000
});
```

### Custom Transitions
```javascript
BackgroundChange.init({
  container: '#bg',
  patterns: ['pattern1.svg', 'pattern2.svg'],
  transition: 'fade', // or 'slide', 'zoom', 'rotate'
  transitionDuration: 800
});
```

### Interactive Mode
```javascript
BackgroundChange.init({
  container: '#bg',
  patterns: ['pattern1.svg', 'pattern2.svg'],
  interactive: true,
  changeOnHover: true,
  changeOnClick: true
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| container | string | '#background' | CSS selector for container |
| patterns | array | [] | Array of SVG pattern URLs |
| transitionDuration | number | 500 | Transition duration in ms |
| autoChange | boolean | false | Auto-change patterns |
| changeInterval | number | 3000 | Auto-change interval in ms |
| transition | string | 'fade' | Transition type |
| interactive | boolean | false | Enable interactive mode |
| changeOnHover | boolean | false | Change on hover |
| changeOnClick | boolean | false | Change on click |

## Features in Detail

### Dynamic Backgrounds
- Multiple SVG patterns
- Random or sequential changes
- Custom pattern URLs

### Transitions
- Fade transitions
- Slide animations
- Zoom effects
- Rotation animations

### Interactive Features
- Click to change
- Hover effects
- Keyboard navigation
- Touch support

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
