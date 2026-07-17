# Goal: Profile Photo in Sidebar

Add a profile photo to the desktop sidebar next to the name.

## Design

- Photo sits to the right of "Ayush / Shivhare" name block
- `justify-between` on the flex row pushes photo to the right edge of sidebar padding,
  creating even space between end of "Shivhare" and right edge
- `w-40 h-40 rounded-full` circle with `object-cover object-top`
- `border-2 border-[var(--border)]` ring follows theme
- `flex-shrink-0` prevents circle squishing

## Asset

- `src/assets/Ayush.jpg` (154KB) — compressed from original 1.4MB PNG
- PNG removed from repo

## Files
- src/components/Sidebar.jsx
- src/assets/Ayush.jpg

## Pending
- Mobile header (Header.jsx) does not show photo — not added, no space on mobile

## Status
DONE
