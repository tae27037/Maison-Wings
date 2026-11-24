import { useState } from "react";
import s from "./About.module.css";
import { useApp } from "../i18n";
import { POSTS, TEAM, OFFICE } from "../data/about";

// фото сотрудника, а если файла нет, кружок с инициалами
function Avatar({ m }) {
  const [bad, setBad] = useState(false);
  const initials = m.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return bad ? (
    <div className={s.initials}>{initials}</div>
  ) : (
    <img
      src={m.photo}
      alt={m.name}
      loading="lazy"
      onError={() => setBad(true)}
    />
  );
}

export default function About({ onShop }) {
  const { t, tr, lang } = useApp();
  const [tab, setTab] = useState("blog");
  const [post, setPost] = useState(null);
  const fmt = (d) =>
    new Date(d).toLocaleDateString(lang === "cs" ? "cs-CZ" : "en-GB");
  const { lat, lon } = OFFICE;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01}%2C${lat - 0.006}%2C${lon + 0.01}%2C${lat + 0.006}&layer=mapnik&marker=${lat}%2C${lon}`;
  const mapLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`;

  const openTab = (k) => {
    setTab(k);
    setPost(null);
  };

  // ---------- открытая статья ----------
  if (post) {
    return (
      <article className={s.article}>
        <button className={s.back} onClick={() => setPost(null)}>
          ← {t("backToBlog")}
        </button>
        <p className={s.meta}>
          {fmt(post.date)} · {t("minRead").replace("{x}", post.min)}
        </p>
        <h1>{tr(post.title)}</h1>
        {post.body[lang].map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <button className={s.cta} onClick={onShop}>
          {t("goCatalog")}
        </button>
      </article>
    );
  }

  return (
    <div className={s.wrap}>
      <section className={s.hero}>
        <h1>{t("aboutTitle")}</h1>
        <p>{t("aboutLead")}</p>
      </section>

      <div className={s.tabs} role="tablist">
        {["blog", "team", "office"].map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            className={tab === k ? s.on : ""}
            onClick={() => openTab(k)}
          >
            {t("tab_" + k)}
          </button>
        ))}
      </div>

      {tab === "blog" && (
        <div className={s.posts}>
          {POSTS.map((p) => (
            <button
              key={p.id}
              className={s.post}
              onClick={() => {
                setPost(p);
                window.scrollTo({ top: 0 });
              }}
            >
              <div className={s.cover} />
              <div className={s.postBody}>
                <span className={s.meta}>
                  {fmt(p.date)} · {t("minRead").replace("{x}", p.min)}
                </span>
                <h3>{tr(p.title)}</h3>
                <p>{tr(p.excerpt)}</p>
                <b>{t("readMore")} →</b>
              </div>
            </button>
          ))}
        </div>
      )}

      {tab === "team" && (
        <>
          <p className={s.lead}>{t("teamLead")}</p>
          <div className={s.team}>
            {TEAM.map((m) => (
              <article key={m.id} className={s.member}>
                <div className={s.avatar}>
                  <Avatar m={m} />
                </div>
                <h3>{m.name}</h3>
                <span className={s.role}>{tr(m.role)}</span>
                <p>{tr(m.bio)}</p>
              </article>
            ))}
          </div>
        </>
      )}

      {tab === "office" && (
        <div className={s.office}>
          <section className={s.info}>
            <h2>{t("tab_office")}</h2>
            <p>{t("officeNote")}</p>
            <dl>
              <dt>{t("address")}</dt>
              <dd>{OFFICE.address}</dd>
              <dt>{t("phone")}</dt>
              <dd>{OFFICE.phone}</dd>
              <dt>{t("email")}</dt>
              <dd>{OFFICE.email}</dd>
            </dl>
            <h3>{t("openHours")}</h3>
            <ul className={s.hours}>
              {OFFICE.hours.map((h, i) => (
                <li key={i}>
                  <span>{tr(h.day)}</span>
                  <b>{typeof h.time === "string" ? h.time : tr(h.time)}</b>
                </li>
              ))}
            </ul>
            <a
              className={s.cta}
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              {t("openMap")}
            </a>
          </section>
          <iframe
            className={s.map}
            title={t("mapTitle")}
            src={mapSrc}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
