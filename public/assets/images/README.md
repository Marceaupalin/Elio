# Registre des images — Elio Robotics

## Convention de nommage

Tous les visuels sont au format **WebP** (compression optimale, support universel).  
Chemin systématique : `/public/assets/images/<identifiant>.webp`  
Pour remplacer un placeholder, déposer le fichier WebP sous le bon identifiant.  
**Aucune modification de code n'est nécessaire** : le composant `ImagePlaceholder`
bascule automatiquement vers le vrai visuel dès que le fichier est présent.

---

## Emplacements à compléter

| Identifiant | Fichier | Page | Rôle | Dimensions cibles | Ratio | Alt suggéré | Statut |
|---|---|---|---|---|---|---|---|
| `hero` | `hero.webp` | `/` (home) | Visuel principal hero | 1200×900 px | 4:3 | Robot de service Elio en contexte hospitality | REMPLAÇABLE |
| `usecase-nettoyage` | `usecase-nettoyage.webp` | `/` home, card 1 | Carte Nettoyage | 800×450 px | 16:9 | Robot autolaveuse en lobby d'hôtel | REMPLAÇABLE |
| `usecase-service` | `usecase-service.webp` | `/` home, card 2 | Carte Service en salle | 800×450 px | 16:9 | Robot serveur en salle de restaurant | REMPLAÇABLE |
| `usecase-livraison` | `usecase-livraison.webp` | `/` home, card 3 | Carte Livraison interne | 800×450 px | 16:9 | Robot de livraison inter-étages | REMPLAÇABLE |
| `usecase-accueil` | `usecase-accueil.webp` | `/` home, card 4 | Carte Accueil | 800×450 px | 16:9 | Robot d'accueil en lobby | REMPLAÇABLE |
| `utilisations-nettoyage` | `utilisations-nettoyage.webp` | `/utilisations` | En-tête section nettoyage | 1200×600 px | 2:1 | Autolaveuse autonome en grande surface | REMPLAÇABLE |
| `utilisations-service` | `utilisations-service.webp` | `/utilisations` | En-tête section service | 1200×600 px | 2:1 | Robot serveur portant des assiettes | REMPLAÇABLE |
| `utilisations-livraison` | `utilisations-livraison.webp` | `/utilisations` | En-tête section livraison | 1200×600 px | 2:1 | Robot dans un couloir d'hôtel | REMPLAÇABLE |
| `approche-equipe` | `approche-equipe.webp` | `/approche` | Image section méthode | 1000×700 px | 10:7 | Équipe Elio en intervention | REMPLAÇABLE |
| `logo-pudu` | `logo-pudu.webp` | Home, Partners | Logo Pudu | 160×60 px | 8:3 | Logo Pudu Robotics | REMPLAÇABLE |
| `logo-keenon` | `logo-keenon.webp` | Home, Partners | Logo Keenon | 160×60 px | 8:3 | Logo Keenon Robotics | REMPLAÇABLE |
| `logo-gausium` | `logo-gausium.webp` | Home, Partners | Logo Gausium | 160×60 px | 8:3 | Logo Gausium | REMPLAÇABLE |
| `logo-orionstar` | `logo-orionstar.webp` | Home, Partners | Logo OrionStar | 160×60 px | 8:3 | Logo OrionStar | REMPLAÇABLE |
| `logo-reeman` | `logo-reeman.webp` | Home, Partners | Logo Reeman | 160×60 px | 8:3 | Logo Reeman | REMPLAÇABLE |
| `logo-hikrobot` | `logo-hikrobot.webp` | Home, Partners | Logo HikRobot | 160×60 px | 8:3 | Logo Hikvision HikRobot | REMPLAÇABLE |

---

## Fournisseurs de visuels recommandés

- **Photos de déploiements réels** : priorité absolue, à prendre lors des premières installations Île-de-France.
- **Photos fabricants** : Pudu, Keenon, Gausium, OrionStar, Reeman, HikRobot proposent des assets presse sous demande.
- **Logos** : disponibles sur les sites officiels ou espaces partenaires des fabricants.

> Ne pas utiliser de photos stock génériques de robots : risque de montrer des modèles non distribués par Elio.
