import { Camera, Video, Package, ShieldCheck, Clock, Sparkles, CheckCircle2, Instagram, User } from "lucide-react";

export default function OnePager() {
  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-neutral-100 py-10">
      <div className="w-[960px] bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="relative p-10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 text-white">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1),transparent_55%)]" />
          <div className="relative">
            <div className="text-xs tracking-widest uppercase text-neutral-300">Pricing & Services</div>
            <h1 className="mt-2 text-3xl font-bold leading-tight">AI 寫實｜圖像與短片製作</h1>
            <p className="mt-2 text-neutral-200 max-w-3xl">合規、不走擦邊球，主打質感寫實與氛圍風格。適用 IG／TikTok 宣傳、品牌視覺、個人形象經營。</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Badge icon={<ShieldCheck className="w-4 h-4" />}>平台合規建議</Badge>
              <Badge icon={<Sparkles className="w-4 h-4" />}>角色一致性</Badge>
              <Badge icon={<Clock className="w-4 h-4" />}>快速交付</Badge>
            </div>
          </div>
        </div>

        {/* Price Cards */}
        <div className="p-8">
          <SectionTitle title="單件計價" subtitle="簡單明確，買多少做多少" />
          <div className="grid md:grid-cols-3 gap-5">
            <PriceCard
              icon={<User className="w-5 h-5" />}
              title="長相設定"
              price="NT$500／角色"
              features={["臉部/妝容/氛圍說明", "提示詞（prompt）1 套", "樣張 1–2 張，含 1 次定稿"]}
            />
            <PriceCard
              icon={<Camera className="w-5 h-5" />}
              title="圖片"
              price="NT$200／張"
              features={["寫實質感修飾", "1 次微調", "4K JPG/PNG"]}
            />
            <PriceCard
              icon={<Video className="w-5 h-5" />}
              title="短片 5–10 秒"
              price="NT$500／支"
              features={["1080p 輸出", "1 次重生 + 1 次剪修", "字幕/口白可加購"]}
            />
          </div>

          {/* Packages */}
          <SectionTitle className="mt-10" title="三個方案（固定內容）" subtitle="入門到進階，直接選配" />
          <div className="grid md:grid-cols-3 gap-5">
            <PackageCard
              title="A 方案"
              price="NT$1,999"
              features={["長相設定", "圖片 ×8", "短片 5–10 秒 ×1"]}
            />
            <PackageCard
              featured
              title="B 方案"
              price="NT$3,999"
              features={["長相設定", "圖片 ×20", "短片 5–10 秒 ×3"]}
            />
            <PackageCard
              title="C 方案"
              price="NT$5,999"
              features={["長相設定", "圖片 ×50", "短片 5–10 秒 ×5"]}
            />
          </div>

          <div className="mt-4 text-sm text-neutral-600">
            超量加購：圖片 NT$200／張；短片（5–10 秒）NT$500／支；長相設定 NT$500／角色。
          </div>

          {/* Workflow & Terms */}
          <SectionTitle className="mt-10" title="流程與交付" subtitle="讓你清楚知道每一步" />
          <div className="grid md:grid-cols-4 gap-5 text-sm">
            <Step num="01" title="需求確認" desc="提供 2–3 張參考圖，確認場合、穿搭、氛圍與用途。" />
            <Step num="02" title="製作與回饋" desc="圖片與短片 24 小時以內；含 1–2 次輕量修正。" />
            <Step num="03" title="合規優化" desc="避開裸露/性行為暗示的違規風險，確保能在 IG/TikTok 長期曝光。" />
            <Step num="04" title="交付" desc="圖片 4K、影片 1080p；可升級 4K。雲端連結一次打包。" />
          </div>

          {/* Notes */}
          <div className="mt-8 p-5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm leading-6">
            <div className="font-semibold mb-1">條款與提醒</div>
            <ul className="list-disc ml-5 grid gap-1">
              <li>內容範疇：不製作裸露、性行為或擦邊挑逗姿勢；可做泳裝、時尚棚拍、運動風等質感寫實。</li>
              <li>授權：僅使用具商用權素材。</li>
              <li>修正：圖片含 1 次微調；短片含 1 次重生 + 1 次剪修；重新生成（re-gen）算一次修正。</li>
              <li>付款：單件與方案皆需先付全額。</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-neutral-900 text-white">
            <div>
              <div className="text-lg font-semibold">想開始了嗎？</div>
              <div className="text-sm opacity-90">丟 2–3 張參考圖與你的目標平台，我今天就幫你排程。</div>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Instagram className="w-10 h-10" />
              <div className="text-2xl font-bold tracking-wide">IG:ai_factory91</div>
            </div>
          </div>

          <div className="mt-5 text-center text-xs text-neutral-500">＊以上為售價與服務說明，可依專案規模與需求彈性調整。</div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-5 ${className}`}>
      <div className="text-xs tracking-widest uppercase text-neutral-500">{subtitle}</div>
      <h2 className="text-xl font-bold mt-1 text-neutral-900">{title}</h2>
    </div>
  );
}

function Badge({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 border border-white/20 backdrop-blur">
      {icon}
      <span className="text-xs">{children}</span>
    </div>
  );
}

function PriceCard({ title, price, features, icon, featured }) {
  return (
    <div className={`relative rounded-2xl border ${featured ? "border-neutral-900" : "border-neutral-200"} p-5 bg-white shadow-sm`}> 
      {featured && (
        <div className="absolute -top-3 right-4 text-[10px] tracking-widest uppercase bg-neutral-900 text-white px-2 py-1 rounded-full">熱門</div>
      )}
      <div className="flex items-center gap-2">
        <div className={`p-2 rounded-xl ${featured ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700"}`}>
          {icon}
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-2xl font-bold">{price}</div>
      <ul className="mt-3 text-sm text-neutral-600 grid gap-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" />{f}</li>
        ))}
      </ul>
    </div>
  );
}

function PackageCard({ title, price, features, featured }) {
  return (
    <div className={`relative rounded-2xl border ${featured ? "border-neutral-900" : "border-neutral-200"} p-5 bg-white shadow-sm`}> 
      {featured && (
        <div className="absolute -top-3 right-4 text-[10px] tracking-widest uppercase bg-neutral-900 text-white px-2 py-1 rounded-full">最受歡迎</div>
      )}
      <div className="flex items-center gap-2">
        <div className={`p-2 rounded-xl ${featured ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700"}`}>
          <Package className="w-5 h-5" />
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-2xl font-bold">{price}</div>
      <ul className="mt-3 text-sm text-neutral-600 grid gap-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" />{f}</li>
        ))}
      </ul>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
      <div className="text-xs text-neutral-500">STEP {num}</div>
      <div className="font-semibold mt-0.5">{title}</div>
      <div className="text-neutral-600 mt-1">{desc}</div>
    </div>
  );
}

function ContactBadge({ icon, label, value }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 md:bg-white/5 px-3 py-2 border border-white/20">
      {icon}
      <div className="text-xs">
        <div className="opacity-80">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
