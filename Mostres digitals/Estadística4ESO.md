# Estadística 4t ESO

**Autors:** Alumnat de Projectes Transversals i Tomás Cuesta  
**Contacte:** tomcue@iesjuandelacierva.com

---

## Descripció

Aquest programa és una aplicació web interactiva que simula tirades d'un dau amb un nombre de cares configurable per l'usuari. Permet generar una sèrie de tirades aleatòries i analitzar estadísticament els resultats obtinguts. 

Està dissenyat com a eina didàctica per treballar conceptes d'estadística a l'aula de manera visual i pràctica.

---

## Funcionalitats

- **Simulació de tirades:** l'usuari tria el nombre de cares i el nombre de tirades.
- **Visualització immediata dels resultats.**
- **Taula de freqüències** que inclou:
  - Freqüència absoluta (fi)
  - Freqüència acumulada (Fi)
  - Freqüència relativa (hi)
  - Freqüència acumulada relativa (Hi)
- **Càlcul opcional de:**
  - Moda (ressaltada a la taula)
  - Mitjana
  - Variança
  - Desviació típica
  - Coeficient de variació (CV)
- **Visualització interactiva de la mediana** amb distribució de rangs per cara.
- **Visualització de quartils (Q1, Q2, Q3)** amb colors diferenciats.
- **Càlcul de percentils personalitzats**, amb ressaltat específic.
- **Interfície clara, sense dependències externes**, totalment autocontenida en un arxiu `.html`.

---

## Ús

1. Obre l'arxiu `Estadística4ESO.html` en qualsevol navegador modern.
2. Introdueix el nombre de cares del dau i el nombre de tirades.
3. Prem “Tirar dau”.
4. Analitza els resultats o accedeix a la taula de freqüències i representacions visuals.

---

## Tecnologies emprades

- **HTML + CSS + JavaScript pur**
- PRNG avançat: `xoshiro128**` amb `splitmix32` per obtenir aleatorietat reproductible i de qualitat.

---

## Autoria

Aquest programa ha estat desenvolupat per **Tomás Cuesta**, professor de Filosofia i divulgador didàctic, com a part d'un conjunt d'eines educatives orientades a l'ensenyament pràctic de la lògica, l'estadística i el pensament científic.

---
