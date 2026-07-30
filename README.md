<div dir="rtl">

# מכון הכנה ל־SAA-C03

אפליקציית הכנה למבחן **AWS Certified Solutions Architect – Associate**.
קובץ HTML יחיד, ללא תלויות חיצוניות, עובד אופליין בנייד ובמחשב.

**[פתיחת האפליקציה ←](https://USERNAME.github.io/REPO/)**
*(החליפו `USERNAME` ו־`REPO` אחרי הפעלת GitHub Pages)*

---

## מה יש כאן

| | |
|---|---|
| **בנק שאלות** | 100 שאלות תרחישיות בסגנון המבחן, מחולקות לפי המשקלים הרשמיים |
| **מבחן סימולציה** | 65 שאלות · טיימר 130 דקות · דגלי סימון · מפת שאלות · ללא משוב עד הסיום |
| **תרגול** | סינון לפי דומיין, משוב מיידי, חזרה מרווחת (Leitner), מצב "שטעיתי בהן" |
| **כרטיסיות** | 30 כללי הכרעה והשוואות שירותים |
| **מד מוכנות** | ציון משוער 100–1000 עם קו מעבר 720, פילוח לפי דומיין ולפי נושא |

השאלות כתובות באנגלית כמו במבחן האמיתי. **ההסברים בעברית**, וכל מסיח שגוי מקבל הסבר נפרד למה הוא שגוי.

---

## נתוני המבחן

מאומת מול מדריך הבחינה הרשמי של AWS:

<div dir="ltr">

| Field | Value |
|---|---|
| Exam code | SAA-C03 |
| Questions | 65 (50 scored + 15 unscored) |
| Duration | 130 minutes |
| Passing score | 720 / 1000 |
| Question types | Multiple choice, multiple response |

</div>

**משקלי הדומיינים:**

| # | דומיין | משקל |
|---|---|---|
| 1 | Design Secure Architectures | 30% |
| 2 | Design Resilient Architectures | 26% |
| 3 | Design High-Performing Architectures | 24% |
| 4 | Design Cost-Optimized Architectures | 20% |

> שימו לב: יש באינטרנט תוכן שגוי שטוען לקיומה של גרסת "SAA-C04". נכון לתאריך הבנייה, המקור הרשמי של AWS מפרסם את המבחן תחת **SAA-C03** בלבד.

---

## הפעלת GitHub Pages

לאחר העלאת הקבצים:

1. **Settings → Pages**
2. תחת *Source* בחרו **Deploy from a branch**
3. בחרו ענף `main` ותיקייה `/ (root)` → **Save**
4. האתר יעלה תוך דקה־שתיים בכתובת `https://USERNAME.github.io/REPO/`

---

## התקנה כאפליקציה בנייד

פתחו את הכתובת בדפדפן ← תפריט ← **הוספה למסך הבית**.
ה־service worker שומר את האפליקציה במטמון, כך שהיא עובדת גם ללא חיבור לאינטרנט.

---

## פרטיות

- **אין קריאות רשת** — האפליקציה לא פונה לשום שרת חיצוני, אין CDN, אין analytics.
- **אין איסוף נתונים** — ההתקדמות נשמרת רק ב־`localStorage` של הדפדפן שלכם.
- **אין סנכרון** — כל מכשיר שומר התקדמות בנפרד.

מפתחות `localStorage` בשימוש: `saa_c03_state_v1`, `saa_theme`.
איפוס מלא: לשונית **נתונים** ← *איפוס התקדמות*.

---

## מבנה הקבצים

<div dir="ltr">

```
index.html              # the entire app — markup, styles, engine, question bank
sw.js                   # service worker (offline cache)
manifest.webmanifest    # PWA manifest
icon.svg                # app icon
```

</div>

---

## הערה על התוכן

השאלות באפליקציה הן **תוכן מקורי** שנכתב בסגנון ובפורמט של המבחן — הן אינן שאלות מהמבחן האמיתי, שהוא חסוי ומוגן בהסכם סודיות מול AWS. השתמשו בהן להבנת דפוסי החשיבה, לצד מדריך הבחינה הרשמי ותיעוד AWS.

## רישיון

MIT

</div>
