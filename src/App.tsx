import { useState, type ReactNode } from "react";

type View = "analyze" | "results" | "performance" | "methodology" | "processing" | "error";
type IconName =
  | "upload"
  | "image"
  | "chart"
  | "book"
  | "settings"
  | "help"
  | "chevron"
  | "download"
  | "zoomIn"
  | "zoomOut"
  | "maximize"
  | "refresh"
  | "file"
  | "alert"
  | "check"
  | "x"
  | "layers"
  | "info"
  | "arrow";

const images = {
  coast:
    "https://images.unsplash.com/photo-1568971267198-2fd5fedeb39b?auto=format&fit=crop&w=1400&q=86",
  fields:
    "https://images.unsplash.com/photo-1623850015227-08e3a26c39c6?auto=format&fit=crop&w=1400&q=86",
  marsh:
    "https://images.unsplash.com/photo-1683490916760-b9628aa2103e?auto=format&fit=crop&w=1400&q=86",
  ocean:
    "https://images.unsplash.com/photo-1681067173687-d83662a431ef?auto=format&fit=crop&w=1400&q=86",
};

function Icon({ name, size = 17 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M4 15v4h16v-4" />
      </>
    ),
    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19H2" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1v.1h-4v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4h-.1v-4H3A1.7 1.7 0 0 0 4.6 8a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1v-.1h4V3A1.7 1.7 0 0 0 16 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.13.38.35.72.66 1 .28.26.64.4 1.02.4h.1v4h-.1c-.38 0-.74.14-1.02.4-.31.28-.53.62-.66 1Z" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.1 9a3 3 0 1 1 5.7 1.3c-.8 1.2-2.8 1.4-2.8 3.2" />
        <path d="M12 17h.01" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    zoomIn: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
        <path d="M11 8v6M8 11h6" />
      </>
    ),
    zoomOut: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
        <path d="M8 11h6" />
      </>
    ),
    maximize: (
      <>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 11a8 8 0 1 0-2.3 5.7" />
        <path d="M20 4v7h-7" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </>
    ),
    alert: (
      <>
        <path d="M10.3 3.7 2.1 18a2 2 0 0 0 1.7 3h16.4a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    check: <path d="m20 6-11 11-5-5" />,
    x: (
      <>
        <path d="m18 6-12 12M6 6l12 12" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
  };
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navItems: { id: View; label: string; icon: IconName }[] = [
  { id: "analyze", label: "Analyze", icon: "upload" },
  { id: "results", label: "Results", icon: "image" },
  { id: "performance", label: "Model performance", icon: "chart" },
  { id: "methodology", label: "Methodology & limits", icon: "book" },
];

function Button({
  children,
  variant = "secondary",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

function AppShell({
  view,
  setView,
  children,
}: {
  view: View;
  setView: (view: View) => void;
  children: ReactNode;
}) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>CloudGuard</strong>
            <small>Scene screening</small>
          </div>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          <div className="nav-label">Workspace</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={view === item.id ? "active" : ""}
              onClick={() => setView(item.id)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.id === "results" && <span className="nav-count">1</span>}
            </button>
          ))}
          <div className="nav-label state-label">Preview states</div>
          <button
            className={view === "processing" ? "active" : ""}
            onClick={() => setView("processing")}
          >
            <span className="state-dot processing-dot" />
            <span>Processing</span>
          </button>
          <button className={view === "error" ? "active" : ""} onClick={() => setView("error")}>
            <span className="state-dot error-dot" />
            <span>Input error</span>
          </button>
        </nav>
        <div className="sidebar-bottom">
          <button>
            <Icon name="help" />
            <span>Documentation</span>
          </button>
          <button>
            <Icon name="settings" />
            <span>Settings</span>
          </button>
          <div className="version">
            MODEL <span>CG-S2 v1.4.2</span>
          </div>
        </div>
      </aside>
      <div className="main-column">
        <header className="topbar">
          <div className="crumbs">
            <span>CloudGuard</span>
            <Icon name="chevron" size={14} />
            <strong>
              {navItems.find((n) => n.id === view)?.label ??
                (view === "processing" ? "Processing" : "Input error")}
            </strong>
          </div>
          <div className="top-actions">
            <span className="system-status">
              <i />
              System operational
            </span>
            <div className="analyst-avatar">AK</div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

const samples = [
  {
    image: images.coast,
    id: "S2B_MSIL2A_20240612T103629",
    place: "Zeeland coast, NL",
    size: "842 MB",
  },
  { image: images.fields, id: "S2A_MSIL2A_20240528T105621", place: "Beauce, FR", size: "1.04 GB" },
  {
    image: images.marsh,
    id: "S2B_MSIL2A_20240703T101559",
    place: "Ebro Delta, ES",
    size: "917 MB",
  },
];

function Analyze({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="page standard-page">
      <PageHeader
        eyebrow="New analysis"
        title="Screen a Sentinel-2 scene"
        description="Upload a surface-reflectance GeoTIFF to estimate cloud, cloud shadow, clear, and nodata coverage."
      />
      <section className="upload-panel">
        <div className="dropzone" onClick={() => setView("processing")} role="button" tabIndex={0}>
          <div className="upload-icon">
            <Icon name="upload" size={22} />
          </div>
          <h2>Drop a GeoTIFF here</h2>
          <p>or choose a local file · single scene, up to 2 GB</p>
          <Button variant="primary">Choose GeoTIFF</Button>
        </div>
        <aside className="input-spec">
          <div className="section-kicker">Accepted input</div>
          <dl>
            <div>
              <dt>Format</dt>
              <dd>GeoTIFF (.tif, .tiff)</dd>
            </div>
            <div>
              <dt>Bands</dt>
              <dd>B2 · B3 · B4 · B8</dd>
            </div>
            <div>
              <dt>Resolution</dt>
              <dd>10 m / pixel</dd>
            </div>
            <div>
              <dt>CRS</dt>
              <dd>Any projected EPSG CRS</dd>
            </div>
            <div>
              <dt>Nodata</dt>
              <dd>Metadata value or 0</dd>
            </div>
          </dl>
          <p>
            <Icon name="info" size={15} /> Bands may be supplied as a 4-band stack or separate
            aligned rasters.
          </p>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <h2>Sample scenes</h2>
            <p>Run a prepared scene to inspect the complete workflow.</p>
          </div>
        </div>
        <div className="sample-grid">
          {samples.map((sample, index) => (
            <button
              className="sample-card"
              key={sample.id}
              onClick={() => setView(index === 2 ? "error" : "results")}
            >
              <img src={sample.image} alt={`Aerial view of ${sample.place}`} />
              <div className="sample-body">
                <strong>{sample.place}</strong>
                <code>{sample.id}</code>
                <div>
                  <span>L2A · 10 m</span>
                  <span>{sample.size}</span>
                </div>
              </div>
              <span className="open-sample">
                <Icon name="arrow" size={16} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="validation-example">
        <div className="validation-icon">
          <Icon name="alert" size={18} />
        </div>
        <div>
          <strong>Example input validation</strong>
          <p>
            <code>S2A_T31UFS_RGB.tif</code> contains 3 bands. Band B8 (near infrared) is required
            for shadow separation.
          </p>
        </div>
        <button onClick={() => setView("error")}>
          View details <Icon name="arrow" size={14} />
        </button>
      </section>
    </div>
  );
}

const classData = [
  { key: "clear", name: "Clear", color: "#188977", value: "71.8%", pixels: "78,848,231" },
  { key: "cloud", name: "Cloud", color: "#E89F31", value: "18.6%", pixels: "20,423,746" },
  { key: "shadow", name: "Shadow", color: "#536E99", value: "7.9%", pixels: "8,673,956" },
  { key: "nodata", name: "Nodata", color: "#9AA3AF", value: "1.7%", pixels: "1,866,041" },
];

function MapControls({ zoom, setZoom }: { zoom: number; setZoom: (zoom: number) => void }) {
  return (
    <div className="map-controls">
      <button onClick={() => setZoom(Math.min(140, zoom + 10))} aria-label="Zoom in">
        <Icon name="zoomIn" />
      </button>
      <button onClick={() => setZoom(Math.max(90, zoom - 10))} aria-label="Zoom out">
        <Icon name="zoomOut" />
      </button>
      <button onClick={() => setZoom(100)} aria-label="Fit image">
        <Icon name="maximize" />
      </button>
    </div>
  );
}

function MapPanel({
  title,
  overlay,
  opacity,
  zoom,
  setZoom,
}: {
  title: string;
  overlay?: boolean;
  opacity: number;
  zoom: number;
  setZoom: (zoom: number) => void;
}) {
  return (
    <div className="map-panel">
      <div className="map-title">
        <span>{title}</span>
        <code>10 m</code>
      </div>
      <div className="map-canvas">
        <img
          src={images.coast}
          alt={overlay ? "Scene with cloud classification overlay" : "Original RGB satellite scene"}
          style={{ transform: `scale(${zoom / 100})` }}
        />
        {overlay && (
          <svg
            className="prediction-mask"
            viewBox="0 0 600 470"
            preserveAspectRatio="none"
            style={{ opacity: opacity / 100 }}
          >
            <path
              className="mask-cloud"
              d="M70,12 C120,43 139,21 184,58 C214,83 194,116 242,135 C278,150 284,190 252,215 C218,241 170,207 137,224 C101,243 61,215 51,181 C38,138 66,113 44,78 C28,50 42,29 70,12Z"
            />
            <path
              className="mask-cloud"
              d="M430,55 C478,32 549,48 584,91 L600,171 C557,192 522,151 480,169 C449,181 414,146 409,111 C405,86 415,66 430,55Z"
            />
            <path
              className="mask-shadow"
              d="M102,217 C145,239 191,225 229,253 C254,272 243,297 210,302 C171,308 144,291 112,304 C85,315 59,286 68,258 C74,239 85,224 102,217Z"
            />
            <path
              className="mask-shadow"
              d="M466,174 C510,170 551,195 576,225 C590,241 578,267 548,260 C511,251 498,230 461,229 C438,228 428,206 441,188 C447,180 455,176 466,174Z"
            />
            <path className="mask-nodata" d="M0 416 L127 443 L160 470 L0 470 Z" />
          </svg>
        )}
        <div className="map-grid-lines" />
        <MapControls zoom={zoom} setZoom={setZoom} />
        <div className="map-coordinate">51.5382° N&nbsp;&nbsp; 3.5947° E</div>
      </div>
    </div>
  );
}

function Results() {
  const [opacity, setOpacity] = useState(64);
  const [zoom, setZoom] = useState(100);
  const [classes, setClasses] = useState<Record<string, boolean>>({
    clear: true,
    cloud: true,
    shadow: true,
    nodata: true,
  });
  const toggle = (key: string) => setClasses((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div className="results-page">
      <div className="results-header">
        <div>
          <div className="eyebrow">Analysis complete</div>
          <h1>Scene quality assessment</h1>
          <div className="scene-meta">
            <code>S2B_MSIL2A_20240612T103629_N0510_R008_T31UFS</code>
            <span>12 Jun 2024 · 10:36 UTC</span>
          </div>
        </div>
        <div className="header-actions">
          <Button>
            <Icon name="refresh" /> Analyze another
          </Button>
          <Button variant="primary">
            <Icon name="download" /> Export
          </Button>
        </div>
      </div>
      <div className="viewer-toolbar">
        <div className="opacity-control">
          <Icon name="layers" />
          <span>Overlay opacity</span>
          <input
            aria-label="Overlay opacity"
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
          />
          <code>{opacity}%</code>
        </div>
        <div className="toolbar-divider" />
        <div className="class-toggles">
          {classData.map((item) => (
            <button
              key={item.key}
              className={!classes[item.key] ? "disabled" : ""}
              onClick={() => toggle(item.key)}
            >
              <i style={{ background: item.color }} />
              {item.name}
              <Icon name={classes[item.key] ? "check" : "x"} size={13} />
            </button>
          ))}
        </div>
        <span className="sync-note">
          <Icon name="refresh" size={14} /> Pan & zoom synchronized
        </span>
      </div>
      <div className="results-layout">
        <section className="viewer-area">
          <div className="dual-viewer">
            <MapPanel title="Original RGB" opacity={opacity} zoom={zoom} setZoom={setZoom} />
            <MapPanel
              title="Prediction overlay"
              overlay
              opacity={opacity}
              zoom={zoom}
              setZoom={setZoom}
            />
          </div>
          <div className="viewer-footer">
            <span>EPSG:32631 · UTM zone 31N</span>
            <span>10,980 × 10,980 px</span>
            <span>109.8 × 109.8 km</span>
            <div className="scale">
              <i />2 km
            </div>
          </div>
        </section>
        <aside className="quality-panel">
          <div className="quality-top">
            <div>
              <span className="panel-label">Scene quality</span>
              <div className="quality-badge">
                <i /> Good
              </div>
            </div>
            <div className="usable">
              <strong>71.8%</strong>
              <span>usable area</span>
            </div>
          </div>
          <div className="stacked-bar" aria-label="Class distribution">
            <span style={{ width: "71.8%", background: "#188977" }} />
            <span style={{ width: "18.6%", background: "#E89F31" }} />
            <span style={{ width: "7.9%", background: "#536E99" }} />
            <span style={{ width: "1.7%", background: "#9AA3AF" }} />
          </div>
          <table className="class-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Pixels</th>
                <th>Area</th>
              </tr>
            </thead>
            <tbody>
              {classData.map((row) => (
                <tr key={row.key}>
                  <td>
                    <i style={{ background: row.color }} />
                    {row.name}
                  </td>
                  <td>{row.pixels}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="metrics-grid">
            <div>
              <span>Valid pixels</span>
              <strong>107.95 M</strong>
            </div>
            <div>
              <span>Inference time</span>
              <strong>42.8 s</strong>
            </div>
            <div>
              <span>Cloud threshold</span>
              <strong>0.55</strong>
            </div>
            <div>
              <span>Shadow threshold</span>
              <strong>0.48</strong>
            </div>
          </div>
          <div className="threshold-note">
            <Icon name="info" size={16} />
            <p>
              <strong>Quality threshold</strong>Scenes with ≥70% clear valid pixels are rated Good.
              Nodata pixels are excluded from the quality ratio.
            </p>
          </div>
          <div className="export-section">
            <span className="panel-label">Export analysis</span>
            <Button>
              <Icon name="download" /> Mask GeoTIFF
            </Button>
            <div>
              <Button>
                <Icon name="download" /> CSV
              </Button>
              <Button>
                <Icon name="file" /> Report
              </Button>
            </div>
          </div>
          <div className="model-warning">
            <Icon name="alert" size={15} />
            <span>
              <strong>Model estimate, not ground truth.</strong> Verify critical areas against
              source imagery.
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

const performanceRows = [
  ["Clear", "0.947", "0.961", "0.954", "0.912", "0.954"],
  ["Cloud", "0.918", "0.903", "0.910", "0.835", "0.910"],
  ["Shadow", "0.842", "0.798", "0.819", "0.694", "0.819"],
  ["Nodata", "0.995", "0.991", "0.993", "0.986", "0.993"],
];

function MiniTriplet({ image, label }: { image: string; label: string }) {
  return (
    <div className="triplet">
      <div className="triplet-images">
        <img src={image} alt={`${label} RGB example`} />
        <div className="label-map">
          <span className="clear-region" />
          <span className="cloud-region" />
          <span className="shadow-region" />
        </div>
        <div className="label-map prediction">
          <span className="clear-region" />
          <span className="cloud-region" />
          <span className="shadow-region" />
        </div>
      </div>
      <div className="triplet-labels">
        <span>Image</span>
        <span>Label</span>
        <span>Prediction</span>
      </div>
      <div className="triplet-meta">
        <strong>{label}</strong>
        <code>IoU 0.87</code>
      </div>
    </div>
  );
}

function Performance() {
  return (
    <div className="page standard-page">
      <PageHeader
        eyebrow="Validation"
        title="Model performance"
        description="Held-out evaluation on 214 Sentinel-2 L2A tiles across five biomes and four seasons."
        action={<div className="model-chip">CG-S2 v1.4.2</div>}
      />
      <section className="metrics-section card-surface">
        <div className="section-heading">
          <div>
            <h2>Per-class metrics</h2>
            <p>Macro average excludes nodata. Values are computed at the 10 m pixel level.</p>
          </div>
          <span className="evaluation-date">Evaluated 18 Jun 2024</span>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Precision</th>
              <th>Recall</th>
              <th>F1</th>
              <th>IoU</th>
              <th>Dice</th>
            </tr>
          </thead>
          <tbody>
            {performanceRows.map((row) => (
              <tr key={row[0]}>
                <td>
                  <i className={`class-${row[0].toLowerCase()}`} />
                  {row[0]}
                </td>
                {row.slice(1).map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
            <tr className="average-row">
              <td>Macro avg.</td>
              <td>0.902</td>
              <td>0.887</td>
              <td>0.894</td>
              <td>0.814</td>
              <td>0.894</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="performance-grid">
        <section className="card-surface confusion-card">
          <div className="section-heading">
            <div>
              <h2>Confusion matrix</h2>
              <p>Row-normalized, true class by predicted class.</p>
            </div>
          </div>
          <div className="matrix-wrap">
            <span className="axis-y">True class</span>
            <div className="matrix">
              <div className="matrix-corner" />
              {["Clear", "Cloud", "Shadow", "Nodata"].map((x) => (
                <b key={x}>{x}</b>
              ))}
              {[
                ["Clear", "96.1", "2.1", "1.8", "0.0"],
                ["Cloud", "5.8", "90.3", "3.8", "0.1"],
                ["Shadow", "14.0", "6.0", "79.8", "0.2"],
                ["Nodata", "0.4", "0.2", "0.3", "99.1"],
              ].map((row) => (
                <div className="matrix-row" key={row[0]}>
                  <b>{row[0]}</b>
                  {row.slice(1).map((v, i) => (
                    <span key={i} style={{ "--strength": Number(v) / 100 } as React.CSSProperties}>
                      {v}%
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <span className="axis-x">Predicted class</span>
          </div>
        </section>
        <section className="card-surface baseline-card">
          <div className="section-heading">
            <div>
              <h2>Baseline comparison</h2>
              <p>Same held-out set and post-processing.</p>
            </div>
          </div>
          <table className="data-table compact">
            <thead>
              <tr>
                <th>Method</th>
                <th>Macro F1</th>
                <th>Cloud IoU</th>
              </tr>
            </thead>
            <tbody>
              <tr className="current-model">
                <td>
                  CloudGuard v1.4.2 <span>current</span>
                </td>
                <td>0.894</td>
                <td>0.835</td>
              </tr>
              <tr>
                <td>s2cloudless 1.7</td>
                <td>0.811</td>
                <td>0.742</td>
              </tr>
              <tr>
                <td>FMask 4.5</td>
                <td>0.783</td>
                <td>0.716</td>
              </tr>
              <tr>
                <td>QA60 bitmask</td>
                <td>0.702</td>
                <td>0.641</td>
              </tr>
            </tbody>
          </table>
          <div className="baseline-note">
            <Icon name="info" size={15} /> Thresholds tuned on the validation split; comparison is
            indicative, not a benchmark certification.
          </div>
        </section>
      </div>
      <section className="examples-section">
        <div className="section-heading">
          <div>
            <h2>Prediction examples</h2>
            <p>Representative outcomes from the held-out set.</p>
          </div>
          <button className="text-button">
            Open evaluation set <Icon name="arrow" size={14} />
          </button>
        </div>
        <div className="examples-grid">
          <MiniTriplet image={images.fields} label="Cropland" />
          <MiniTriplet image={images.coast} label="Coastal" />
          <MiniTriplet image={images.marsh} label="Wetland" />
          <MiniTriplet image={images.ocean} label="Open water" />
        </div>
      </section>
    </div>
  );
}

function Methodology() {
  return (
    <div className="page standard-page methodology-page">
      <PageHeader
        eyebrow="Reference"
        title="Methodology & limitations"
        description="How classifications are produced, interpreted, and where they should be treated with caution."
        action={
          <Button>
            <Icon name="download" /> Technical note
          </Button>
        }
      />
      <div className="method-layout">
        <aside className="on-this-page">
          <span>On this page</span>
          <a href="#pipeline">Processing pipeline</a>
          <a href="#classes">Class definitions</a>
          <a href="#thresholds">Decision thresholds</a>
          <a href="#limits">Known limitations</a>
          <a href="#data">Dataset & license</a>
        </aside>
        <article className="method-content">
          <section id="pipeline">
            <div className="section-number">01</div>
            <div>
              <h2>Processing pipeline</h2>
              <p>
                CloudGuard accepts Sentinel-2 Level-2A surface reflectance. The four 10 m bands are
                normalized using fixed reflectance statistics, processed in overlapping 512 × 512
                pixel tiles, and recombined using a cosine-weighted edge blend.
              </p>
              <div className="pipeline">
                <div>
                  <code>01</code>
                  <strong>Validate</strong>
                  <span>bands, CRS, nodata</span>
                </div>
                <Icon name="arrow" />
                <div>
                  <code>02</code>
                  <strong>Tile</strong>
                  <span>512 px · 64 px overlap</span>
                </div>
                <Icon name="arrow" />
                <div>
                  <code>03</code>
                  <strong>Infer</strong>
                  <span>4-class segmentation</span>
                </div>
                <Icon name="arrow" />
                <div>
                  <code>04</code>
                  <strong>Aggregate</strong>
                  <span>area & quality metrics</span>
                </div>
              </div>
            </div>
          </section>
          <section id="classes">
            <div className="section-number">02</div>
            <div>
              <h2>Class definitions</h2>
              <div className="definition-list">
                {[
                  [
                    "#188977",
                    "Clear",
                    "Land or water surface with no visible cloud or cloud-shadow obstruction.",
                  ],
                  [
                    "#E89F31",
                    "Cloud",
                    "Opaque and semi-transparent cloud, including bright cirrus where detected.",
                  ],
                  [
                    "#536E99",
                    "Shadow",
                    "Cloud-cast shadow with reduced visible and near-infrared reflectance.",
                  ],
                  [
                    "#9AA3AF",
                    "Nodata",
                    "Pixels outside the acquisition footprint or marked invalid in source metadata.",
                  ],
                ].map((row) => (
                  <div key={row[1]}>
                    <i style={{ background: row[0] }} />
                    <strong>{row[1]}</strong>
                    <p>{row[2]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="thresholds">
            <div className="section-number">03</div>
            <div>
              <h2>Decision thresholds</h2>
              <p>
                Pixel probabilities are converted to classes using the following calibrated
                thresholds. Remaining valid pixels are assigned clear.
              </p>
              <table className="data-table threshold-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Probability</th>
                    <th>Post-processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cloud</td>
                    <td>≥ 0.55</td>
                    <td>3 × 3 morphological close</td>
                  </tr>
                  <tr>
                    <td>Shadow</td>
                    <td>≥ 0.48</td>
                    <td>Minimum region 8 pixels</td>
                  </tr>
                  <tr>
                    <td>Nodata</td>
                    <td>Source mask</td>
                    <td>No model inference</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section id="limits">
            <div className="section-number">04</div>
            <div>
              <h2>Known limitations</h2>
              <div className="limitations">
                {[
                  [
                    "Snow and bright sand",
                    "High-albedo surfaces may be classified as cloud, especially without short-wave infrared bands.",
                  ],
                  [
                    "Dark water and terrain",
                    "Deep water, terrain shadow, and burn scars may be confused with cloud shadow.",
                  ],
                  [
                    "Thin cirrus",
                    "Sub-visible cirrus can remain undetected at the standard cloud threshold.",
                  ],
                  [
                    "Scene edges",
                    "Predictions within 32 pixels of a data boundary have reduced spatial context.",
                  ],
                ].map((x, i) => (
                  <div key={x[0]}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{x[0]}</strong>
                      <p>{x[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="data">
            <div className="section-number">05</div>
            <div>
              <h2>Dataset attribution & license</h2>
              <p>
                Training data combines the Sentinel-2 Cloud Mask Catalogue, CloudSEN12, and manually
                reviewed CloudGuard annotations. Sentinel-2 imagery contains modified Copernicus
                Sentinel data (2021–2024).
              </p>
              <div className="license-box">
                <Icon name="file" />
                <div>
                  <strong>Model & annotations</strong>
                  <p>
                    Model weights: Apache 2.0 · Added annotations: CC BY 4.0 · Source datasets
                    retain their original licenses.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

function Processing({ setView }: { setView: (view: View) => void }) {
  const tiles = Array.from({ length: 96 });
  return (
    <div className="page state-page">
      <PageHeader
        eyebrow="Processing"
        title="Analyzing scene"
        description="The raster is processed locally in tiles. You can leave this page; analysis will continue."
      />
      <section className="processing-card">
        <div className="processing-file">
          <div className="file-icon">
            <Icon name="image" size={22} />
          </div>
          <div>
            <strong>S2B_MSIL2A_20240612T103629_T31UFS.tif</strong>
            <code>842 MB · 4 bands · EPSG:32631</code>
          </div>
          <span>38 seconds elapsed</span>
        </div>
        <div className="processing-status">
          <div>
            <span>Running segmentation</span>
            <strong>68%</strong>
          </div>
          <div className="progress-track">
            <span style={{ width: "68%" }} />
          </div>
          <p>Tile 66 of 96 · estimated 18 seconds remaining</p>
        </div>
        <div className="tile-progress">
          {tiles.map((_, i) => (
            <i key={i} className={i < 64 ? "done" : i === 64 ? "active" : ""} />
          ))}
        </div>
        <div className="processing-steps">
          <div className="complete">
            <Icon name="check" />
            <span>
              <strong>Input validated</strong>
              <small>4 bands aligned · nodata detected</small>
            </span>
            <code>2.1 s</code>
          </div>
          <div className="complete">
            <Icon name="check" />
            <span>
              <strong>Raster tiled</strong>
              <small>96 tiles · 64 px overlap</small>
            </span>
            <code>4.6 s</code>
          </div>
          <div className="current">
            <span className="spinner" />
            <span>
              <strong>Model inference</strong>
              <small>GPU acceleration enabled</small>
            </span>
            <code>running</code>
          </div>
          <div>
            <span className="step-circle">4</span>
            <span>
              <strong>Aggregate report</strong>
              <small>Calculate scene-level statistics</small>
            </span>
            <code>pending</code>
          </div>
        </div>
        <div className="processing-actions">
          <Button onClick={() => setView("analyze")}>Cancel analysis</Button>
          <button className="text-button" onClick={() => setView("results")}>
            Skip to completed state <Icon name="arrow" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ErrorState({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="page state-page">
      <PageHeader
        eyebrow="Input validation"
        title="Scene could not be analyzed"
        description="The source file is unchanged. Correct the issue below and upload it again."
      />
      <section className="error-card">
        <div className="error-summary">
          <div className="error-large-icon">
            <Icon name="alert" size={24} />
          </div>
          <div>
            <span>Missing required band</span>
            <h2>Band B8 (near infrared) was not found</h2>
            <p>
              CloudGuard uses near-infrared reflectance to separate dark cloud shadow from
              low-reflectance surfaces.
            </p>
          </div>
        </div>
        <div className="file-inspection">
          <div className="inspection-header">
            <span>File inspection</span>
            <code>S2A_T31UFS_RGB.tif</code>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Detected bands</th>
                <td>
                  <span className="band-ok">
                    <Icon name="check" size={13} /> B2
                  </span>
                  <span className="band-ok">
                    <Icon name="check" size={13} /> B3
                  </span>
                  <span className="band-ok">
                    <Icon name="check" size={13} /> B4
                  </span>
                  <span className="band-missing">
                    <Icon name="x" size={13} /> B8
                  </span>
                </td>
              </tr>
              <tr>
                <th>Raster size</th>
                <td>
                  <code>10,980 × 10,980 px</code>
                </td>
              </tr>
              <tr>
                <th>CRS</th>
                <td>
                  <code>EPSG:32631</code>
                </td>
              </tr>
              <tr>
                <th>Resolution</th>
                <td>
                  <code>10.0 × 10.0 m</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fix-guidance">
          <strong>How to fix this</strong>
          <ol>
            <li>Export B2, B3, B4, and B8 as a four-band GeoTIFF in that order.</li>
            <li>Confirm all bands use the same extent, CRS, and 10 m pixel grid.</li>
            <li>Preserve the source nodata value in GeoTIFF metadata.</li>
          </ol>
        </div>
        <div className="error-actions">
          <Button variant="primary" onClick={() => setView("analyze")}>
            <Icon name="upload" /> Choose another file
          </Button>
          <Button>
            <Icon name="book" /> Input preparation guide
          </Button>
        </div>
        <div className="error-code">
          <span>Error code</span>
          <code>CG_INPUT_MISSING_BAND · validator 1.4.2</code>
        </div>
      </section>
    </div>
  );
}

function StyleGuide() {
  return (
    <section className="style-guide">
      <div>
        <span>Interface reference</span>
        <strong>CloudGuard UI system</strong>
      </div>
      <div className="swatches">
        <i style={{ background: "#153F45" }} title="Deep teal" />
        <i style={{ background: "#188977" }} title="Clear" />
        <i style={{ background: "#E89F31" }} title="Cloud" />
        <i style={{ background: "#536E99" }} title="Shadow" />
        <i style={{ background: "#9AA3AF" }} title="Nodata" />
      </div>
      <div className="type-sample">
        <strong>Aa</strong>
        <span>
          Inter / 14 px body
          <br />
          <code>IBM Plex Mono / data</code>
        </span>
      </div>
      <div className="spacing-sample">
        <span />
        <span />
        <span />
        <code>8 px scale</code>
      </div>
      <div className="component-sample">
        <button>Default</button>
        <span>6 px radius · 1 px border</span>
      </div>
    </section>
  );
}

export default function App() {
  const [view, setView] = useState<View>("results");
  let content: ReactNode;
  if (view === "analyze") content = <Analyze setView={setView} />;
  else if (view === "results") content = <Results />;
  else if (view === "performance") content = <Performance />;
  else if (view === "methodology") content = <Methodology />;
  else if (view === "processing") content = <Processing setView={setView} />;
  else content = <ErrorState setView={setView} />;
  return (
    <AppShell view={view} setView={setView}>
      {content}
      <StyleGuide />
    </AppShell>
  );
}
