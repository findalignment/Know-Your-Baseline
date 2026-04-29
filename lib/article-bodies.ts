export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'pullquote'; text: string }
  | { type: 'chart' };

const RMR_VS_TDEE: Block[] = [
  { type: 'p', text: "Walk into any nutrition conversation and you'll hear two acronyms thrown around interchangeably: RMR and TDEE. They are not the same thing. One is a measurement. The other is an estimate built on top of that measurement, multiplied by a guess about your lifestyle." },
  { type: 'p', text: 'Knowing the difference matters because the most common dieting mistake — eating too little and stalling — usually traces back to using the wrong number.' },

  { type: 'h2', text: 'RMR is what you measure' },
  { type: 'p', text: 'Resting metabolic rate is the energy your body burns at complete rest, just keeping the lights on. Heart beating, brain running, kidneys filtering, liver doing whatever it is the liver does. For most adults this number lands somewhere between 1,200 and 2,000 calories a day.' },
  { type: 'p', text: 'You measure RMR with indirect calorimetry: lie still under a hood or with a mask for fifteen to twenty minutes while a metabolic cart counts the oxygen you consume. The math from there is straightforward — every liter of oxygen you burn corresponds to roughly 4.8 calories.' },
  { type: 'p', text: "The output is a single, defensible number. It's reproducible within about 3% test-to-test, which is tight enough to use for actual nutrition planning." },

  { type: 'h2', text: 'TDEE is what you estimate' },
  { type: 'p', text: 'Total daily energy expenditure is RMR plus everything else: the thermic effect of food (roughly 10% of intake), the calories you burn during structured exercise, and — by far the biggest and most variable component — non-exercise activity thermogenesis, or NEAT. Fidgeting, walking around the kitchen, taking the stairs, standing during a phone call.' },
  { type: 'pullquote', text: 'NEAT can vary by 2,000 calories a day between two people of the same size. It is the wild card.' },
  { type: 'p', text: "Because NEAT is so variable, TDEE is always an estimate. The standard approach is to multiply RMR by an activity factor: 1.2 for sedentary, 1.375 for lightly active, 1.55 for moderately active, 1.725 for very active. These multipliers are genuinely useful, but they're averages applied to one person — which is to say, slightly wrong for almost everyone." },

  { type: 'h2', text: 'How to use both' },
  { type: 'p', text: 'Treat RMR as the floor. Eating below your measured RMR for any extended period is rarely a good idea — your body responds by downregulating thyroid output, suppressing reproductive hormones, and burning lean tissue for fuel.' },
  { type: 'p', text: "Treat TDEE as a starting hypothesis. Pick the activity multiplier that honestly describes your week, eat at that level for two weeks, and weigh yourself every morning. If your weight is stable, the estimate was right. If it's drifting up or down, adjust by 200 calories and try again." },
  { type: 'p', text: "The nice thing about having a measured RMR is that it makes this iteration much faster. You're not guessing about half the equation anymore. You know exactly what you're working with at rest, and the only uncertainty is in the activity multiplier — which a couple of weeks of honest tracking will clean up." },

  { type: 'h2', text: 'When to retest' },
  { type: 'p', text: 'RMR shifts with body composition. Lose 15 pounds of fat and your RMR drops a little. Gain 8 pounds of lean mass and it climbs. Both changes are smaller than people expect — usually 50 to 100 calories a day — but over a year they add up. A retest every six months is plenty for most people. Athletes in active body recomposition might benefit from quarterly.' },
];

const HRV_RECOVERY: Block[] = [
  { type: 'p', text: 'HRV has become the metric every wearable wants to sell you. Open the app and it puts a single number on your morning: your HRV is 42. Last night was 38. Today’s "Recovery Score" is yellow. The trouble is — that number, in isolation, tells you almost nothing.' },
  { type: 'p', text: 'Heart rate variability is the variance, in milliseconds, between consecutive heartbeats. A heart at rest doesn’t tick like a metronome — every beat lands a few milliseconds before or after the last one, and that variance is a window into the balance between your sympathetic and parasympathetic nervous systems. Higher variance, in general, means more parasympathetic tone — more "rest and digest." Lower variance suggests your body is still running some kind of stress response.' },

  { type: 'h2', text: 'Why the single number misleads' },
  { type: 'p', text: 'There are half a dozen ways your HRV can drop ten points overnight that have nothing to do with whether you’re recovered. You drank wine. You ate dinner late. The room was warm. You slept on your back. You were dehydrated. You had a stressful conversation right before bed. None of these mean you should skip your workout.' },
  { type: 'p', text: 'Sport-science researchers have known this for years. The studies that find HRV useful for training decisions almost never use a single morning reading. They use rolling averages — typically a 7-day baseline compared against an individual’s normal range — and they only flag a problem when readings stay outside the range for several consecutive days.' },

  { type: 'pullquote', text: 'A single morning HRV number is noise. The rolling 7-day average is the signal.' },

  { type: 'h2', text: 'The rolling baseline' },
  { type: 'p', text: 'Set up your tracker to give you two things: your morning HRV (whatever it is) and your 7-day rolling average. The single morning value will bounce around 5–15% from day to day even when nothing has changed. That bounce is normal physiological variability — not feedback about your training.' },
  { type: 'p', text: 'What you’re watching for is the trend of the rolling average. If your 7-day baseline drifts down 10% and stays there for a week or more, your body is telling you something. That’s the signal that distinguishes overreaching — a temporary, planned dip during a hard training block — from overtraining, a sustained drop that needs an actual recovery week.' },

  { type: 'h2', text: 'Collecting data that’s actually comparable' },
  { type: 'p', text: 'Take the reading at the same time, in the same position, every morning. The standard is: lying down, within five minutes of waking, before you get up and before you check your phone. Wear-it-overnight devices (Whoop, Oura, Garmin) handle this automatically; chest-strap apps that take a one-minute reading work too if you’re consistent.' },
  { type: 'p', text: 'One more honest note: HRV has a strong individual baseline. Comparing your 38 to your friend’s 65 is meaningless. Some people sit at 30, some at 90, and both can be perfectly healthy. The only useful comparison is your number to your number, last week.' },

  { type: 'h2', text: 'What to actually do with it' },
  { type: 'p', text: 'When your rolling baseline drops and stays low: dial back intensity for three to five days. Easy aerobic work is fine — Zone 2 actually helps. Skip the intervals. Add thirty minutes of sleep. Eat enough.' },
  { type: 'p', text: 'When it climbs back, you can resume hard work. The recovery isn’t about how you feel. The body lies about how recovered it is in both directions — you’ll feel sluggish during a recovery week even though your nervous system is rebuilding, and you’ll feel sharp the day before an injury.' },
  { type: 'p', text: 'This is the only frame in which HRV earns its keep: a slow-moving signal about whether the cumulative load you’re putting on your body is too much. Used that way, it’s worth tracking. Used as a daily score, it’ll lead you wrong about half the time.' },
];

const READING_BODY_COMP: Block[] = [
  { type: 'p', text: 'A DEXA scan gives you about a dozen numbers, four of which actually matter for most people. The other eight are interesting but they don’t change what you should do. Here’s a walkthrough of what to look at first — and what to ignore on the first pass.' },

  { type: 'h2', text: 'Total body fat percentage (the headline that lies)' },
  { type: 'p', text: 'It’s the headline number, and it’s the most distorted. Body fat percentage compares your fat mass to your total mass — including bone, organs, water, and lean tissue. Lose two pounds of muscle and your "body fat percentage" goes up even though you have exactly the same amount of fat. Drink an extra liter of water and it goes down.' },
  { type: 'p', text: 'The percentile is more useful than the absolute number. 22% body fat for a 35-year-old man is in the athlete range. The same 22% for a 65-year-old is somewhere between average and good. Both are fine. Your job isn’t to chase a single number — it’s to understand the four absolute amounts that drove it.' },

  { type: 'h2', text: 'Fat mass — the absolute number, in pounds' },
  { type: 'p', text: 'This is the one number that maps cleanly to what most people actually care about. It’s the total mass of adipose tissue in your body, in pounds (or kilograms). If you’re in a structured fat-loss phase, this is the only number you should track on retest — body fat percentage moves around for too many reasons to be a reliable indicator over a 12-week window.' },
  { type: 'p', text: 'Two ranges to know: roughly 12–18% body fat for men and 20–28% for women is the band where most chronic-disease risk sits at its lowest. Below 8% for men or 16% for women starts producing problems in a different direction — hormonal disruption, immune suppression. The middle band is wide on purpose.' },

  { type: 'h2', text: 'Lean mass — the one most people get wrong' },
  { type: 'p', text: 'Lean mass is everything that isn’t fat: muscle, bone, organs, connective tissue, water. The DEXA report breaks it into "lean mass" and "fat-free mass" — they’re slightly different (fat-free mass includes bone mineral content) but for practical purposes they’re close enough.' },
  { type: 'p', text: 'The number you actually want to watch is appendicular lean mass — the lean tissue in your arms and legs — because it’s the cleanest proxy for skeletal muscle. Total lean mass includes the weight of your organs, which doesn’t change much. Appendicular lean mass changes when you train.' },
  { type: 'p', text: 'A useful threshold: women below ~14 kg of appendicular lean mass and men below ~20 kg start showing signs of clinical sarcopenia. You don’t want to be at that threshold; you want to be well above it.' },

  { type: 'pullquote', text: 'Of all the numbers on a DEXA report, visceral fat is the one most worth nudging in the right direction.' },

  { type: 'h2', text: 'Visceral adipose tissue (VAT)' },
  { type: 'p', text: 'Visceral fat sits behind your abdominal wall, packed around your organs. Unlike subcutaneous fat — the kind you can pinch — VAT is metabolically active, secretes inflammatory cytokines, and is associated with type-2 diabetes and cardiovascular disease independently of your total body fat.' },
  { type: 'p', text: 'Modern DEXA reports give you VAT in grams. Anything below 100 g is considered healthy; above 160 g is associated with elevated metabolic risk. Of all the numbers on a DEXA report, this is the one most worth nudging in the right direction. The good news is it responds to almost everything — caloric deficits, aerobic exercise, fiber, sleep.' },

  { type: 'h2', text: 'Bone density: Z-score and T-score' },
  { type: 'p', text: 'Two numbers, similar names, different uses. The T-score compares your bone density to a young, healthy adult of your sex; the Z-score compares it to people of your age and sex. T-score is what doctors use to diagnose osteopenia (-1 to -2.5) and osteoporosis (below -2.5).' },
  { type: 'p', text: 'For most people under 50, the Z-score is the more honest number — it tells you whether you’re tracking with your peers. Below -2 is when you should care; otherwise the number is for tracking, not panicking.' },

  { type: 'h2', text: 'What to ignore on the first pass' },
  { type: 'p', text: 'Trunk fat. Android-to-gynoid ratio. Right-leg-to-left-leg lean mass asymmetry. These appear on most DEXA reports and they have research applications, but for a normal person reading their first scan, they’re noise. Come back to them on retest #3 if you’re still curious.' },
];

export const ARTICLE_BODIES: Record<string, Block[]> = {
  'rmr-vs-tdee': RMR_VS_TDEE,
  'hrv-recovery': HRV_RECOVERY,
  'reading-body-comp': READING_BODY_COMP,
};

export function getArticleBody(slug: string): Block[] | undefined {
  return ARTICLE_BODIES[slug];
}
