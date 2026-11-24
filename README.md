# world-news-one-page

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/obvirm/world-news-one-page/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/obvirm/world-news-one-page/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page newspaper of the world news of Tuesday, 24 November 2026: NATO's pledge to defend space after reports of a Russian nuclear-armed satellite, Ukraine's sea-drone strike on a Russian warship off Libya, Nvidia's reinstatement of Jensen Huang as CEO, China's death sentence for an official who spied, New Zealand's flood risk at Franz Josef, and more.

The image is drawn by `tools/build-poster.mjs` in HTML and SVG with no external assets, then rendered once to `entry.png` at 1024×1024. `main.ts` copies that image to the grader's output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
