/**
 * Hero illustration: a laptop showing a clinic website with online booking,
 * and a phone showing a WhatsApp-style AI assistant booking a consultation.
 * Pure markup, no images.
 */

const dot = (bg) => ({ width: 7, height: 7, borderRadius: "50%", background: bg });

const serviceCard = { display: "flex", alignItems: "center", gap: 8, border: "1px solid #EEF0F3", borderRadius: 8, padding: 6 };
const serviceIcon = { width: "22%", aspectRatio: "1", borderRadius: 6, background: "#E6F4F4", display: "grid", placeItems: "center" };
const slot = { border: "1px solid #E4E7EC", borderRadius: 7, padding: "4px 0" };

const bubbleMe = { alignSelf: "flex-end", maxWidth: "82%", background: "#D9FDD3", padding: "6px 8px", borderRadius: "8px 8px 2px 8px", boxShadow: "0 1px 0 rgba(0,0,0,0.08)" };
const bubbleBot = { alignSelf: "flex-start", maxWidth: "86%", background: "#FFFFFF", padding: "6px 8px", borderRadius: "8px 8px 8px 2px", boxShadow: "0 1px 0 rgba(0,0,0,0.08)" };
const time = { display: "block", textAlign: "right", color: "#667781", fontSize: "0.8em" };

export default function HeroDevices() {
  return (
    <div
      role="img"
      aria-label="A laptop showing a clinic website with online booking, and a phone showing an AI assistant booking a consultation on WhatsApp"
      style={{ position: "relative", minWidth: 0, padding: "0 0 36px" }}
    >
      {/* Laptop */}
      <div style={{ width: "92%" }}>
        <div style={{ background: "#1C1F26", border: "1px solid #2A2F3A", borderRadius: "18px 18px 6px 6px", padding: "10px 10px 12px", boxShadow: "0 40px 80px -50px rgba(13,17,23,0.8)" }}>
          <div style={{ aspectRatio: "16 / 10", background: "#FFFFFF", color: "#0D1117", borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column", fontSize: "clamp(7px, 0.78vw, 11px)" }}>
            {/* browser bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", background: "#EEF0F3", borderBottom: "1px solid #DDE1E7" }}>
              <span style={dot("#C9CED6")} /><span style={dot("#C9CED6")} /><span style={dot("#C9CED6")} />
              <span style={{ marginLeft: 8, flex: 1, background: "#FFFFFF", borderRadius: 5, padding: "2px 8px", fontFamily: "var(--font-mono)", color: "#596170" }}>brightside.clinic</span>
            </div>
            {/* site nav */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px", borderBottom: "1px solid #EEF0F3" }}>
              <b className="tn-display" style={{ fontSize: "1.35em", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: "1em", height: "1em", borderRadius: "50%", background: "#0E7C86" }} />brightside
              </b>
              <span style={{ display: "flex", gap: 14, color: "#596170" }}>
                <span>Treatments</span><span>Team</span><span>Reviews</span><span>Contact</span>
              </span>
              <span style={{ background: "#0E7C86", color: "#FFFFFF", borderRadius: 999, padding: "3px 10px", fontWeight: 600 }}>Book online</span>
            </div>
            {/* site hero */}
            <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 14, padding: "14px 16px", flex: 1, minHeight: 0, background: "linear-gradient(#F3FAFA, #FFFFFF)" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 7 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8em", letterSpacing: "0.12em", color: "#0E7C86" }}>DENTAL &amp; SKIN CLINIC</span>
                <b className="tn-display" style={{ fontSize: "2.5em", lineHeight: 0.95, letterSpacing: "-0.03em" }}>Modern care, booked in seconds.</b>
                <span style={{ color: "#596170", lineHeight: 1.4 }}>Same-week appointments, friendly specialists and reminders that just work.</span>
                <span style={{ display: "flex", gap: 6 }}>
                  <span style={{ background: "#0D1117", color: "#FFFFFF", borderRadius: 999, padding: "5px 12px", fontWeight: 600 }}>Book a visit</span>
                  <span style={{ border: "1px solid #C9CED6", borderRadius: 999, padding: "5px 12px" }}>Our treatments</span>
                </span>
              </div>
              {/* availability card */}
              <div style={{ alignSelf: "center", background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6, boxShadow: "0 14px 30px -22px rgba(13,17,23,0.5)" }}>
                <span style={{ display: "flex", justifyContent: "space-between" }}><b>Next available</b><span style={{ color: "#0E7C86" }}>● this week</span></span>
                <span style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 5, textAlign: "center" }}>
                  <span style={slot}>Wed<br /><b>9:30</b></span>
                  <span style={{ ...slot, border: "1px solid #0E7C86", background: "#E6F4F4" }}>Thu<br /><b>3:00</b></span>
                  <span style={slot}>Fri<br /><b>11:00</b></span>
                </span>
                <span style={{ color: "#596170" }}>★ 4.9 from 312 patient reviews</span>
              </div>
            </div>
            {/* services row + chat launcher */}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, padding: "0 16px 12px" }}>
              <span style={serviceCard}>
                <span style={serviceIcon}>
                  <svg viewBox="0 0 24 24" width="62%" height="62%" fill="none" stroke="#0E7C86" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" /></svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}><b>Check-ups</b><span style={{ color: "#596170" }}>30 min</span></span>
              </span>
              <span style={serviceCard}>
                <span style={serviceIcon}>
                  <svg viewBox="0 0 24 24" width="62%" height="62%" fill="none" stroke="#0E7C86" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l2.2 5 5.3.5-4 3.6 1.2 5.3L12 14.8 7.3 17.4 8.5 12l-4-3.6 5.3-.5z" /></svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}><b>Whitening</b><span style={{ color: "#596170" }}>1 visit</span></span>
              </span>
              <span style={serviceCard}>
                <span style={serviceIcon}>
                  <svg viewBox="0 0 24 24" width="62%" height="62%" fill="none" stroke="#0E7C86" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}><b>Skin care</b><span style={{ color: "#596170" }}>Consults</span></span>
              </span>
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: 10, top: -30, width: "2.6em", height: "2.6em", borderRadius: "50%", background: "#0E7C86", color: "#FFFFFF", display: "grid", placeItems: "center", boxShadow: "0 8px 16px -8px rgba(13,17,23,0.6)" }}
              >
                <svg viewBox="0 0 24 24" width="55%" height="55%" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>
              </span>
            </div>
          </div>
        </div>
        <div style={{ height: 14, margin: "0 -5%", background: "linear-gradient(#D5D9E0, #B9BEC7)", borderRadius: "0 0 20px 20px", position: "relative" }}>
          <span style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", width: "18%", height: 5, borderRadius: "0 0 8px 8px", background: "#A7ADB7" }} />
        </div>
      </div>

      {/* Phone: WhatsApp-style AI assistant */}
      <div style={{ position: "absolute", right: 0, bottom: 0, width: "36%", maxWidth: 220, aspectRatio: "9 / 18.5", background: "#111216", borderRadius: 30, padding: 8, boxSizing: "border-box", boxShadow: "0 36px 70px -34px rgba(13,17,23,0.85)" }}>
        <div style={{ height: "100%", borderRadius: 23, overflow: "hidden", background: "#EFE7DE", color: "#111B21", display: "flex", flexDirection: "column", fontSize: "clamp(8px, 0.82vw, 11px)", lineHeight: 1.35 }}>
          <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 2px", background: "#075E54" }}>
            <span style={{ width: "32%", height: 12, borderRadius: 999, background: "#000000" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 10px 9px", background: "#075E54", color: "#FFFFFF" }}>
            <span style={{ fontSize: "1.1em" }} aria-hidden="true">‹</span>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#FFFFFF", color: "#075E54", display: "grid", placeItems: "center", fontWeight: 700, fontSize: "0.85em" }}>AI</span>
            <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <b style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Clinic Assistant</b>
              <span style={{ color: "#CDE7E2", fontSize: "0.85em" }}>AI agent · online</span>
            </span>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6, padding: "10px 9px", minHeight: 0 }}>
            <span style={{ alignSelf: "center", background: "#FFFFFF", color: "#54656F", borderRadius: 6, padding: "2px 8px", fontSize: "0.85em" }}>Today</span>
            <span style={bubbleMe}>Hi, can I book a consultation this week?<span style={time}>10:02 <span style={{ color: "#53BDEB" }}>✓✓</span></span></span>
            <span style={bubbleBot}>Of course! I have <b>Thu 3:00 pm</b> or <b>Fri 11:00 am</b> free. Which works for you?<span style={time}>10:02</span></span>
            <span style={bubbleMe}>Thursday 3pm please<span style={time}>10:03 <span style={{ color: "#53BDEB" }}>✓✓</span></span></span>
            <span style={bubbleBot}>Booked ✓ <b>Thu, 3:00 pm</b>. I&apos;ve sent the details to your email and will remind you the day before.<span style={time}>10:03</span></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 7px 8px" }}>
            <span style={{ flex: 1, background: "#FFFFFF", borderRadius: 999, padding: "5px 10px", color: "#8696A0" }}>Message</span>
            <span aria-hidden="true" style={{ width: 22, height: 22, borderRadius: "50%", background: "#00A884", display: "grid", placeItems: "center" }}>
              <svg viewBox="0 0 24 24" width="60%" height="60%" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
