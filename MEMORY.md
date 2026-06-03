# Family Trip Tenerife — Memory

**Status:** Planning · agenda drafted, reservations pending
**Dates:** 5–7 June 2026
**Last updated:** 2026-05-18

## Summary

Family reunion (11 pax) in Tenerife, hosted by Angeles at **Laguna Gran Hotel, La Laguna** (2 nights). Dual purpose: meet baby Luca + anticipated celebration of Candela's birthday.

## Attendees (11)

- Angeles (host)
- Luis + Colombina + Leo (2.5) + Luca (1 mo) — already in Tenerife
- Jota + Carmen + Candela (~6)
- Carlos + Daniela
- Javier + Luisa

## Plan At-a-Glance

| Day | Plan |
|---|---|
| Fri 5 Jun | Loro Parque (15:00–18:00) → Cumple Candela dinner at El Monasterio, La Montañeta (20:00) |
| Sat 6 Jun | Siam Park (Costa Adeje) → informal dinner in La Laguna |
| Sun 7 Jun | Casco histórico La Laguna → lunch → visit to Luis & Colombina's home → escalonated departures |

Full detail in `Agenda.md`.

## Cars

1. Luis (familia Luis, sillita Leo + MaxiCosi Luca)
2. Angeles (Angeles, Carlos, Daniela)
3. Alquiler Carmen/Jota
4. Alquiler Javier (recoge a Luisa sábado)

## Open Loops

- [ ] Confirm Javier's flight (arrival time Friday)
- [ ] Confirm Jota's Friday-evening flight
- [ ] Confirm Luisa's Saturday-morning flight
- [ ] Send finalized agenda to family WhatsApp group

**Bookings:** all reservations done by Luis & Colombina.

## Reservations To Book

1. Loro Parque — online entries (night before, for discount)
2. **El Monasterio** (La Montañeta, Los Realejos) — Fri 20:00, 11 pax, note birthday + cake, request table near animal/play zone if possible
3. Siam Park — entries Sat 6
4. Saturday dinner La Laguna — 20:00, La Fam vota para elegir sitio, 11 pax
5. Sunday lunch — El Patio de Pedro (auténtico guachinche), 11 pax (flexible window) — https://maps.app.goo.gl/F2ot3qBrAfdEoVgf9
6. Small gift for Candela for Loro Parque (main gift saved for 5 Jul)

## Key Decisions

- Hotel: Laguna Gran Hotel (Angeles invitation) — fixed
- Friday dinner anchor: **El Monasterio** (La Montañeta, Los Realejos) — finca con animales, salones amplios, vistas Valle de La Orotava + Teide. Brunelli's / La Cúpula / El Taller Seve Díaz quedan como backups.
- Sunday afternoon: pass by Luis & Colombina's home (introduce Luca in their environment)

## Constraints

- **Luca (1 mo):** porteo/carrito, shade, on-demand feeds, no temperature shocks (watch Siam Park AC/sun)
- **Leo (2.5):** midday nap will collapse into car transfers — accept it
- Always pack: water, snacks, double change, mineral sunscreen, gorro, mild antimosquitos

## Notes

- Candela's real birthday is 5 Jul; this is the anticipated celebration
- Plan is flexible Sunday; departures are escalonated by each family's flight

## Public Family-Facing Page

- **File:** `index.html` (single-file static page, Spanish, read-only)
- **Hosting:** GitHub Pages on `CommanderWi11/Family_Trip_Tenerife` (repo must be **public** for free Pages)
- **URL (once enabled):** https://commanderwi11.github.io/Family_Trip_Tenerife/ (case-sensitive after 2026-05-19 rename)
- **Privacy model:** security-by-obscurity. Repo is public, but URL is shared only via WhatsApp.
- **Sanitization rules — do NOT add to `index.html`:**
  - Last names (first names only)
  - Phone numbers, emails
  - Flight numbers or ticket references
  - Anything you wouldn't put on a postcard
- **Updates:** edit `index.html`, commit, push → Pages redeploys in ~1 min.

### QR de entradas (La Familia)

- Clicking a family avatar opens a popup with that person's park-entry QR. Data lives in `qr-data.js` (base64 PNGs extracted from the ticket PDFs in `Resources/`).
- **Decision (Luis):** QRs embedded **openly** on the public page (accepted exposure; tickets expire after 6 Jun). **Luis & Colombina have NO popup** — they enter Siam on annual passes.
- Mapping derived from anonymous tickets + verified by decoding each QR: NM "5+1 Twin" = both parks for the extended clan (5 adults + Candela paid-child + Leo/Luca free); Jota & Luisa = Siam-only entries (they skip Loro). **Luca's free ticket is Loro-only** (his QR encodes only 5 Jun).
