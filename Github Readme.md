<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Mujahid%20Kalanthar&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=40&desc=BTech%20ECE%20%E2%80%94%20MNNIT%20Allahabad&descAlignY=62&descSize=16&descColor=8b949e" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&pause=1200&color=58A6FF&center=true&vCenter=true&width=560&height=40&lines=Full-Stack+%26+AI+Systems+Engineering;RAG+Pipelines+%C2%B7+Backend+Architecture;Analytics+%26+Data+Science;Strategy+%26+Business+Intelligence)](https://git.io/typing-svg)

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mujahid-kalanthar/)
&nbsp;
[![Email](https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:mujahidknmohamed@gmail.com)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar)

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

ECE undergrad at MNNIT Allahabad, building across the stack — full-stack platforms, AI/RAG systems, and analytics engines. I work at the intersection of rigorous engineering and applied problem solving, with a focus on systems that are correct, cost-aware, and built to handle real-world edge cases.

Outside code, I compete at the national level in strategy, analytics, consulting, and innovation — and have placed on the podium across competitions hosted by IITs, IIMs, IISc, NMIMS, and SRCC.

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

## Achievements

<div align="center">

<table border="0" cellspacing="0" cellpadding="20">
<tr>

<td align="center" width="33%">
<h2>🏆&nbsp; 5+</h2>
<b>Podium Finishes</b><br/>
<sub>National-level strategy, analytics,<br/>consulting & innovation competitions</sub>
</td>

<td align="center" width="4%"><sub>│</sub></td>

<td align="center" width="33%">
<h2>🎯&nbsp; 10+</h2>
<b>National Finalist · Shortlisted</b><br/>
<sub>IITs · IIMs · IISc · NMIMS · SRCC · MNNIT</sub>
</td>

<td align="center" width="4%"><sub>│</sub></td>

<td align="center" width="26%">
<h2>🗂️&nbsp; 6</h2>
<b>Projects Shipped</b><br/>
<sub>Full-Stack · AI/RAG · Analytics</sub>
</td>

</tr>
</table>

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

## What I Work On

```
Full-Stack Engineering    →   React · TypeScript · FastAPI · Node.js · Vercel
AI & RAG Systems          →   LangChain · ChromaDB · Gemini · Mistral · Groq · Zod
Backend & Databases       →   Supabase (PostgreSQL + RLS) · SQLite WAL · MongoDB
Analytics & Intelligence  →   Pandas · Scikit-learn · Plotly · Streamlit · Power BI
Infra & Tooling           →   Docker · Git · GitHub Actions · pydub · FFmpeg · yt-dlp
```

I'm particularly interested in:
- AI system design where models serve a precise, bounded function — not a catch-all
- Backend architecture that stays reliable under async concurrency and real workloads  
- Analytics pipelines that produce decisions, not just visualizations
- Applied business intelligence for strategy and competitive problem-solving

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

## Projects

<table width="100%">
<tr>

<td width="50%" valign="top">

**📚 PACE — Personalized Academic Planning & Execution**
<br/>
`Full-Stack` `AI Syllabus Parsing` `Deterministic Scheduling`

Production-oriented planner for students targeting JEE, NEET, GATE, and board exams. Gemini 3.6 Flash + Zod handles unstructured syllabus ingestion; all schedule generation runs on a deterministic engine — 0% hallucination, sub-5ms recalculations, zero daily AI cost.

- Server-side AI pipeline with human-in-the-loop review gate before any DB write
- Multi-constraint scheduler: daily capacity, timetable blocks, spaced repetition (1/7/30-day)
- Adaptive missed-work redistribution across remaining available days
- Supabase RLS: row-level isolation ensures private syllabi are never exposed to study buddies
- 13/13 deterministic unit tests covering scheduling edge cases

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_3.6-8E75B2?style=flat-square&logo=google&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

[![](https://img.shields.io/badge/View_Repository-0d1117?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar/PACE-study-planner)

</td>

<td width="50%" valign="top">

**🎥 AuraVideo AI — Video & Meeting Intelligence**
<br/>
`RAG Pipeline` `LLM Orchestration` `Async Backend`

Transforms YouTube videos and meeting recordings into a structured, queryable knowledge base — executive summary, action items, key decisions, and an evidence-grounded chat interface with cited source excerpts on every answer.

- Namespaced Chroma vector store per analysis: zero cross-contamination, durable disk persistence
- Map-reduce summarization for transcripts exceeding LLM context windows
- Real-time progress via SSE with per-analysis `asyncio.Queue` fan-out — no client polling
- Multi-provider transcription: Groq whisper-large-v3 → Sarvam AI (Hinglish) → local Whisper fallback
- Tenacity exponential-backoff retry across all external API calls; shell injection prevention via `shlex.quote()`

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python_3.12-3776AB?style=flat-square&logo=python&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6B35?style=flat-square&logoColor=white)
![Mistral](https://img.shields.io/badge/Mistral_AI-FF7000?style=flat-square&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite_WAL-003B57?style=flat-square&logo=sqlite&logoColor=white)

[![](https://img.shields.io/badge/View_Repository-0d1117?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar/auravideo-ai-assistant)

</td>

</tr>

<tr><td colspan="2"><br/></td></tr>

<tr>

<td width="50%" valign="top">

**⚡ VoltEdge Intelligence — India Energy Security Platform**
<br/>
`Strategic Analytics` `Geopolitical Simulation` `National Finalist · SRCC`

Macroeconomic and geopolitical intelligence platform modelling India's energy-security vulnerability under global disruption scenarios (Strait of Hormuz). Simulates inflationary pressure, GDP slowdown, FX stress, and long-term energy resilience.

- Executive crisis dashboard with KPI risk scoring across energy security dimensions
- Interactive geopolitical scenario simulator with adjustable policy levers
- Macroeconomic stress modelling: CPI, currency pressure, GDP contraction chains
- Energy import vulnerability heatmaps and diversification intelligence modules
- National Finalist — SRCC Case Competition

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)

[![](https://img.shields.io/badge/View_Repository-0d1117?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar)

</td>

<td width="50%" valign="top">

**🚀 ZeptoIQ — Quick-Commerce Profitability Intelligence**
<br/>
`Business Analytics` `Forecasting` `2nd Place · MNNIT Allahabad`

Strategic analytics platform evaluating Zepto's dark-store model across scalability, profitability, and IPO readiness dimensions. Surfaces the unit economics behind 10-minute delivery at scale.

- Unit economics engine: CAC, LTV, and contribution margin modelled per dark store
- Prophet-based demand and revenue forecasting across expansion scenarios
- Dark-store rollout simulation with city-level profitability heatmaps
- IPO readiness scorecard across 8 financial health dimensions
- 2nd Place — MNNIT Allahabad National Case Competition

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![Prophet](https://img.shields.io/badge/Prophet-0078D4?style=flat-square&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=flat-square&logo=powerbi&logoColor=black)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)

[![](https://img.shields.io/badge/View_Repository-0d1117?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar)

</td>

</tr>

<tr><td colspan="2"><br/></td></tr>

<tr>

<td width="50%" valign="top">

**📈 D2C Growth Intelligence — Retention Analytics Platform**
<br/>
`NLP` `Cohort Analytics` `National Finalist · DDUC, Delhi University`

End-to-end retention intelligence platform for premium D2C brands. Models sustainable growth through cohort analytics, pricing intelligence, profitability simulation, and NLP-driven consumer sentiment analysis.

- Cohort retention and repeat-purchase analytics with LTV modelling
- Pricing and margin simulation engine across SKU and channel tiers
- RFM-based customer segmentation with growth and churn forecasting
- TextBlob NLP sentiment layer on consumer reviews with keyword clustering
- National Marketing Case Competition Finalist — DDUC, University of Delhi

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![TextBlob](https://img.shields.io/badge/TextBlob_NLP-6DB33F?style=flat-square&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)

[![](https://img.shields.io/badge/View_Repository-0d1117?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar)

</td>

<td width="50%" valign="top">

**💊 SaveOnCare — Healthcare Billing Transparency Platform**
<br/>
`Civic Tech` `AI-Powered` `National Finalist · IIT Jammu`

AI-powered platform helping patients decode hospital bills, detect overcharges, and surface government scheme eligibility (Ayushman Bharat & MCD hospitals). Brings structured transparency to a notoriously opaque process.

- Color-coded bill flagging: Green / Yellow / Red severity classification per line item
- Smart Treatment Advisor for Ayushman Bharat and subsidized facility matching
- AI Health Assistant for natural language queries against bill content
- Auto-generated dispute letters and itemized explanation reports
- National Finalist — IIT Jammu Civic Tech Competition

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

[![](https://img.shields.io/badge/View_Repository-0d1117?style=flat-square&logo=github&logoColor=white)](https://github.com/MujahidKalanthar)

</td>

</tr>
</table>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

## Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Mistral](https://img.shields.io/badge/Mistral_AI-FF7000?style=for-the-badge&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6B35?style=for-the-badge&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-F55036?style=for-the-badge&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logoColor=white)

![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite_WAL-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

## GitHub Stats

<div align="center">
  
<img src="https://github-readme-streak-stats.herokuapp.com/?user=MujahidKalanthar&theme=github-dark-blue&hide_border=true&background=0d1117&ring=58A6FF&fire=58A6FF&currStreakLabel=8b949e&sideLabels=8b949e&dates=8b949e"/>

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

## Experience

<table width="100%">
<tr>

<td width="50%" valign="top">

**Software Development Intern**&nbsp;&nbsp;`Quality Techno Certification (Riyadh, Saudi Arabia)`

<sub>Backend development, automation workflows, and internal tooling. Worked on real production systems with shipping responsibilities.</sub>

</td>

<td width="50%" valign="top">

**Open Source Contributor**&nbsp;&nbsp;`GirlScript Summer of Code 2024`

<sub>Community-level contributions to open source projects. Collaborated with maintainers across code review, bug fixes, and feature additions.</sub>

</td>

</tr>
</table>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=2" width="100%"/>

<br/>

<div align="center">

<sub>MNNIT Allahabad &nbsp;·&nbsp; BTech Electronics & Communication Engineering</sub>

<sub>Open to internships, research collaborations, and interesting engineering problems.</sub>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

</div>
