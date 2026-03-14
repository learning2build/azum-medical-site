# Location photos (Contact page)

**Store your location/office photos in this folder.**

They will appear under the map on the Contact page.

- Use these filenames and the site will show them automatically:
  - `location-1.webp`
  - `location-2.webp`
  - `location-3.webp`
- You can add more; then add the filename to the list in `site/app/contact/page.tsx` in the `LOCATION_PHOTOS` array.

Supported formats: .webp, .jpg, .jpeg, .png

If you don’t have photos yet, set `LOCATION_PHOTOS = []` in `site/app/contact/page.tsx` to hide the section until you add images.
