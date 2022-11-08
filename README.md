## Example usage on an Astro page or inside an Astro component

```
---
import IntObs from './IntObs.astro'
---
<IntObs fromLeft="-100px" fromAbove="200px" imgSpeed="1s" txtSpeed="1s">
    
<div class="txtbox">
  <p class="iotxt fromLeft">one ipsum dolor sit, amet consectetur adipisicing elit. Labore eius consectetur reprehenderit odio deleniti necessitatibus hic esse, natus deserunt architecto obcaecati officia in rem voluptatum, praesentium repellendus iste exercitationem neque?</p>
</div>
  
<div class="imgbox">
  <img class="ioimg fromAbove" src="https://easycss.github.io/easyimage/img1.png" alt="avatar a">
</div>

</IntObs>
```

- `txtbox` class wraps any text you wish to animate
- `imgbox` class wraps any images you with to animate
- `iotxt` or `ioimg` class plus any of the following animation classes: 
`fromLeft fromRight fromBelow fromAbove scaleUp`
- `IntObs component` requires the following prop values: Pixel values, positive or negative depending on which direction you want the animation to move in. Please note: The scaleUp class is a float value not a pixel value) Examples: `fromLeft="-100px" fromRight="200px" fromBelow="200px" fromAbove="200px" scaleUp="0.8"` 
- Lastly, the following component props control the animation speed: `imgSpeed="1s" and txtSpeed="1s"`. `imgSpeed` when you wrap your image with the `imgbox` class and `txtSpeed` when you wrap text in the `txtbox` class.