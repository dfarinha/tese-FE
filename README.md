# Master thesis - Blockchain front end

The front end was built with Angular 7 and Bootstrap 4. All of the dependencies can be found in the package.json file. A free to use template available in [Creative-Tim](https://www.creative-tim.com/) was used for the homepage and the styling of elements such as forms or buttons


## Quick start

Quick start options:

- Clone the repo: `git clone https://github.com/dfarinha/tese-FE`.
- Install packages 
```
npm i
```
- To run the app 
```
ng serve
```


## File Structure


```
src/
┣ app/
┃ ┣ auth/
┃ ┃ ┣ auth.component.html
┃ ┃ ┣ auth.component.scss
┃ ┃ ┣ auth.component.ts
┃ ┃ ┗ auth.service.ts
┃ ┣ check-serial/
┃ ┃ ┣ check-serial.component.html
┃ ┃ ┣ check-serial.component.scss
┃ ┃ ┣ check-serial.component.spec.ts
┃ ┃ ┗ check-serial.component.ts
┃ ┣ components/
┃ ┃ ┣ basicelements/
┃ ┃ ┃ ┣ basicelements.component.html
┃ ┃ ┃ ┣ basicelements.component.scss
┃ ┃ ┃ ┣ basicelements.component.spec.ts
┃ ┃ ┃ ┗ basicelements.component.ts
┃ ┃ ┣ nucleoicons/
┃ ┃ ┃ ┣ nucleoicons.component.html
┃ ┃ ┃ ┣ nucleoicons.component.scss
┃ ┃ ┃ ┣ nucleoicons.component.spec.ts
┃ ┃ ┃ ┗ nucleoicons.component.ts
┃ ┃ ┣ components.component.html
┃ ┃ ┣ components.component.ts
┃ ┃ ┗ components.module.ts
┃ ┣ register/
┃ ┃ ┣ register.component.html
┃ ┃ ┣ register.component.scss
┃ ┃ ┣ register.component.spec.ts
┃ ┃ ┗ register.component.ts
┃ ┣ shared/
┃ ┃ ┗ navbar/
┃ ┃ ┃ ┣ navbar.component.html
┃ ┃ ┃ ┣ navbar.component.scss
┃ ┃ ┃ ┣ navbar.component.spec.ts
┃ ┃ ┃ ┗ navbar.component.ts
┃ ┣ success/
┃ ┃ ┣ chains/
┃ ┃ ┃ ┣ blocks/
┃ ┃ ┃ ┃ ┣ blocks.component.html
┃ ┃ ┃ ┃ ┣ blocks.component.scss
┃ ┃ ┃ ┃ ┗ blocks.component.ts
┃ ┃ ┃ ┣ chains.component.html
┃ ┃ ┃ ┣ chains.component.scss
┃ ┃ ┃ ┗ chains.component.ts
┃ ┃ ┣ inventories/
┃ ┃ ┃ ┣ inventories.component.html
┃ ┃ ┃ ┣ inventories.component.scss
┃ ┃ ┃ ┗ inventories.component.ts
┃ ┃ ┣ inventory/
┃ ┃ ┃ ┣ inventory.component.html
┃ ┃ ┃ ┣ inventory.component.scss
┃ ┃ ┃ ┗ inventory.component.ts
┃ ┃ ┣ partners/
┃ ┃ ┃ ┣ loggedprofile/
┃ ┃ ┃ ┃ ┣ loggedprofile.component.html
┃ ┃ ┃ ┃ ┣ loggedprofile.component.scss
┃ ┃ ┃ ┃ ┗ loggedprofile.component.ts
┃ ┃ ┃ ┣ profiles/
┃ ┃ ┃ ┃ ┣ profiles.component.html
┃ ┃ ┃ ┃ ┣ profiles.component.scss
┃ ┃ ┃ ┃ ┗ profiles.component.ts
┃ ┃ ┃ ┣ partners.component.html
┃ ┃ ┃ ┣ partners.component.scss
┃ ┃ ┃ ┗ partners.component.ts
┃ ┃ ┣ product/
┃ ┃ ┃ ┣ product.component.html
┃ ┃ ┃ ┣ product.component.scss
┃ ┃ ┃ ┗ product.component.ts
┃ ┃ ┣ success.component.html
┃ ┃ ┣ success.component.scss
┃ ┃ ┣ success.component.ts
┃ ┃ ┗ success.module.ts
┃ ┣ .DS_Store
┃ ┣ app.component.html
┃ ┣ app.component.scss
┃ ┣ app.component.ts
┃ ┣ app.module.ts
┃ ┣ app.routing.ts
┃ ┗ auth-guard.service.ts
┣ assets/
┃ ┣ css/
┃ ┃ ┣ demo.css
┃ ┃ ┗ nucleo-icons.css
┃ ┣ fonts/
┃ ┃ ┣ nucleo-icons.eot
┃ ┃ ┣ nucleo-icons.ttf
┃ ┃ ┣ nucleo-icons.woff
┃ ┃ ┗ nucleo-icons.woff2
┃ ┣ img/
┃ ┃ ┣ examples/
┃ ┃ ┃ ┣ landing-page.JPG
┃ ┃ ┃ ┗ profile-page.JPG
┃ ┃ ┣ faces/
┃ ┃ ┃ ┣ ayo-ogunseinde-2.jpg
┃ ┃ ┃ ┣ clem-onojeghuo-2.jpg
┃ ┃ ┃ ┣ clem-onojeghuo-3.jpg
┃ ┃ ┃ ┣ erik-lucatero-2.jpg
┃ ┃ ┃ ┣ joe-gardner-2.jpg
┃ ┃ ┃ ┗ kaci-baum-2.jpg
┃ ┃ ┣ 0.jpeg
┃ ┃ ┣ andre.jpeg
┃ ┃ ┣ angular2-logo-white.png
┃ ┃ ┣ angular2-logo.png
┃ ┃ ┣ antoine-barres.jpg
┃ ┃ ┣ apple-icon.png
┃ ┃ ┣ bruno-abatti.jpg
┃ ┃ ┣ clouds.png
┃ ┃ ┣ daniel-olahh.jpg
┃ ┃ ┣ daniel-olahs.jpg
┃ ┃ ┣ fabio-mangione.jpg
┃ ┃ ┣ favicon.ico
┃ ┃ ┣ federico-beccari.jpg
┃ ┃ ┣ fog-low.png
┃ ┃ ┣ ilya-yakover.jpg
┃ ┃ ┣ jose-barata.jpg
┃ ┃ ┣ joshua-stannard.jpg
┃ ┃ ┣ login-image.jpg
┃ ┃ ┣ new_logo.png
┃ ┃ ┣ placeholder.jpg
┃ ┃ ┣ soroush-karimi.jpg
┃ ┃ ┗ uriel-soberanes.jpg
┃ ┗ sass/
┃ ┃ ┣ paper-kit/
┃ ┃ ┃ ┣ mixins/
┃ ┃ ┃ ┃ ┣ _buttons.scss
┃ ┃ ┃ ┃ ┣ _inputs.scss
┃ ┃ ┃ ┃ ┣ _labels.scss
┃ ┃ ┃ ┃ ┣ _navbars.scss
┃ ┃ ┃ ┃ ┣ _popovers.scss
┃ ┃ ┃ ┃ ┣ _tabs.scss
┃ ┃ ┃ ┃ ┣ _transparency.scss
┃ ┃ ┃ ┃ ┗ _vendor-prefixes.scss
┃ ┃ ┃ ┣ plugins/
┃ ┃ ┃ ┃ ┗ _datetimepicker.scss
┃ ┃ ┃ ┣ _alerts.scss
┃ ┃ ┃ ┣ _bootstrap-switch.scss
┃ ┃ ┃ ┣ _buttons.scss
┃ ┃ ┃ ┣ _cards.scss
┃ ┃ ┃ ┣ _carousel.scss
┃ ┃ ┃ ┣ _checkbox-radio.scss
┃ ┃ ┃ ┣ _collapse.scss
┃ ┃ ┃ ┣ _dropdown.scss
┃ ┃ ┃ ┣ _examples.scss
┃ ┃ ┃ ┣ _footers.scss
┃ ┃ ┃ ┣ _icons.scss
┃ ┃ ┃ ┣ _images.scss
┃ ┃ ┃ ┣ _inputs.scss
┃ ┃ ┃ ┣ _labels.scss
┃ ┃ ┃ ┣ _misc.scss
┃ ┃ ┃ ┣ _mixins.scss
┃ ┃ ┃ ┣ _modal.scss
┃ ┃ ┃ ┣ _navbars.scss
┃ ┃ ┃ ┣ _progress-bars.scss
┃ ┃ ┃ ┣ _responsive.scss
┃ ┃ ┃ ┣ _sections.scss
┃ ┃ ┃ ┣ _sliders.scss
┃ ┃ ┃ ┣ _social-buttons.scss
┃ ┃ ┃ ┣ _tabs-navs-pagination.scss
┃ ┃ ┃ ┣ _tooltips-and-popovers.scss
┃ ┃ ┃ ┣ _typography.scss
┃ ┃ ┃ ┗ _variables.scss
┃ ┃ ┗ paper-kit.scss
┣ environments/
┃ ┣ environment.prod.ts
┃ ┗ environment.ts
┣ .DS_Store
┣ favicon.ico
┣ index.html
┣ main.ts
┣ polyfills.ts
┣ styles.scss
┣ test.ts
┣ tsconfig.app.json
┣ tsconfig.spec.json
┗ typings.d.ts

```


## Browser Support

The website should render correctly in the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Authors

* Diogo Farinha

## Acknowledgments

* [Nuno Carvalhão](https://nunocarvalhao.com)