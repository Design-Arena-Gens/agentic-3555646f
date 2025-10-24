import { NextRequest, NextResponse } from 'next/server'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const SYSTEM_PROMPT = `You are an expert YouTube script writer who specializes in creating engaging content in Hinglish (Hindi + English mix). You're helping create a video about underrated AI tools.

The tools to cover:
1. Lover Art - AI art generation tool
2. Base 44 - Base64 encoding/decoding tool
3. Bhendi AI - AI assistant tool
4. Light PDF - PDF editor tool
5. Vercept - Web development/design tool
6. Prompt AI - AI prompt engineering tool

Your responsibilities:
- Create engaging hooks that grab attention in first 3-5 seconds
- Write natural Hinglish scripts (mix Hindi and English naturally, like: "Aaj main aapko batane wala hoon kuch amazing tools ke baare mein")
- Structure content in segments for each tool
- Make content engaging, casual, and relatable for Indian YouTube audience
- Include calls-to-action and engagement hooks
- Keep language conversational and energetic
- Use popular YouTube phrases like "aur haan", "toh chalo shuru karte hain", "must try karna", etc.

Always respond in Hinglish and make the scripts YouTube-friendly with proper pacing and energy.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // Simulate AI response for demo - replace with actual OpenAI API call
    const userMessage = messages[messages.length - 1].content.toLowerCase()

    let response = ''

    if (userMessage.includes('hook') || userMessage.includes('intro') || userMessage.includes('shuru')) {
      response = `🎬 **POWERFUL HOOK FOR YOUR VIDEO:**

**Option 1 (Direct & Bold):**
"Agar aapko lagta hai ki aapne sab AI tools dekh liye hain, toh yeh video aapki aankhein khol dega! Main aaj aapko 6 aise underrated gems batane wala hoon jo 99% logo ko pata hi nahi hai, aur yeh literally game-changers hain!"

**Option 2 (Question Hook):**
"Kya aap jaante hain ki ek AI tool hai jo aapki boring PDFs ko 10 seconds mein professional banaa sakta hai? Ya phir ek tool jo aapke rough sketches ko museum-worthy art mein convert kar de? Nahi jaante? Toh yeh video last tak dekhiye!"

**Option 3 (Story Hook):**
"Last week maine ek tool discover kiya jo itna powerful tha ki maine apne 4 ghante ka kaam sirf 10 minutes mein khatam kar diya. Aur aaj main aapko aise hi 6 tools ke baare mein bataunga jo aapki productivity ko literally 10x kar denge!"

**Suggested Opening After Hook:**
"Toh hello everyone! Aaj ka video hai underrated AI tools ke baare mein, jo powerful toh bahut hain but unfortunately logo ko pata nahi hai. Toh video ko like kar do, channel ko subscribe karo, aur chalo shuru karte hain!"

Kaunsa hook best laga? Ya main aur options suggest karun? 😊`
    }
    else if (userMessage.includes('complete') || userMessage.includes('full script') || userMessage.includes('sabhi')) {
      response = `📝 **COMPLETE VIDEO SCRIPT:**

---

**🎬 HOOK (0:00-0:15)**
"Kya aap jaante hain ki ek AI tool hai jo aapki boring PDFs ko 10 seconds mein professional banaa sakta hai? Ya phir ek tool jo aapke rough sketches ko museum-worthy art mein convert kar de? Aaj main aapko 6 aise underrated gems batane wala hoon jo literally game-changers hain!"

**📌 INTRO (0:15-0:30)**
"Hello everyone! Welcome back to my channel. Aaj ka video bahut exciting hai kyunki hum baat karenge 6 underrated AI tools ke baare mein jo powerful toh hain but unfortunately zyada famous nahi hain. Toh video ko like kar do, subscribe karna mat bhulna, aur bell icon press kar do. Toh chalo, shuru karte hain!"

---

**🎨 SEGMENT 1: LOVER ART (0:30-1:30)**

"Sabse pehle baat karte hain **Lover Art** ke baare mein. Yeh ek AI art generation tool hai aur guys, yeh literally next level hai!

**Kya hai special?**
- Aap bas ek simple description do, aur yeh stunning artwork create kar deta hai
- Realistic portraits se leke abstract art tak, sab kuch possible hai
- Best part? Interface itna simple hai ki koi bhi use kar sakta hai

**Real-world use:**
Maan lo aapko apne YouTube thumbnail ke liye unique art chahiye, ya social media posts ke liye eye-catching visuals - Lover Art literally 2 minutes mein kar dega!

**Pro tip:** Morning mein iska free tier use karo, speed thodi zyada hoti hai.

Chalo, next tool dekhte hain..."

---

**🔧 SEGMENT 2: BASE 44 (1:30-2:15)**

"Agli tool hai **Base 44** - aur yeh developers ke liye ek hidden gem hai!

**Kya karta hai?**
Yeh ek super-fast Base64 encoder aur decoder hai. Sounds technical? Don't worry, main explain karta hoon.

**Simple explanation:**
Kabhi aapne images ya files ko text format mein convert karna chahiye? That's what Base64 does, aur Base 44 isko bahut easy aur fast bana deta hai.

**Use cases:**
- Web developers ke liye images embed karna
- APIs test karna
- Data transfer secure karna

Interface clean hai, speed fast hai, aur best part - completely free hai!

Developers ho toh must try karna..."

---

**🤖 SEGMENT 3: BHENDI AI (2:15-3:15)**

"Ab baat karte hain **Bhendi AI** ke baare mein - aur guys, yeh naam thoda funny zaroor hai but kaam ka tool hai!

**Kya hai special?**
Yeh ek AI assistant hai jo specifically Indian users ke liye optimize hai. Matlab yeh Hinglish samajhta hai, Indian context samajhta hai!

**Features:**
- Natural conversation in Hinglish
- Content generation specifically for Indian audience
- Understands desi references aur context

**Best use:**
Agar aap content creator ho, blogger ho, ya phir social media manage karte ho - yeh tool literally aapka best friend ban sakta hai. Indian audience ke liye content generate karna ho toh Bhendi AI perfect hai!

Aur haan, naam pe mat jao, kaam solid hai! 😄

Agle tool pe chalte hain..."

---

**📄 SEGMENT 4: LIGHT PDF (3:15-4:15)**

"Fourth tool hai **Light PDF** - aur yeh mere personal favorites mein se ek hai!

**Problem we all face:**
PDFs edit karni ho, merge karni ho, compress karni ho - usually bahut complicated hota hai ya expensive tools laggte hain.

**Solution: Light PDF**
- Super easy PDF editing
- Merge, split, compress - sab kuch possible
- Convert PDFs to Word, Excel, ya images
- Best part? Browser mein hi kaam karta hai, koi software install nahi karna

**Real-life example:**
Last week mujhe 50MB ki PDF email karni thi but size limit 10MB tha. Light PDF ne 2 minutes mein compress kar ke 8MB ki PDF bana di, aur quality bhi maintained rahi!

Students ho, working professionals ho, ya freelancers - yeh tool sabke liye useful hai.

Chalo, next gem dekhte hain..."

---

**💻 SEGMENT 5: VERCEPT (4:15-5:00)**

"Fifth tool hai **Vercept** - aur yeh web developers ke liye ek hidden treasure hai!

**Kya hai yeh?**
Vercept ek web development aur design tool hai jo development process ko super smooth bana deta hai.

**Key features:**
- Quick prototyping with AI assistance
- Clean code generation
- Design to code conversion
- Modern frameworks support

**Why special?**
Traditional development mein jo 2 ghante lagte hain, Vercept mein 30 minutes mein ho jaata hai!

**Perfect for:**
- Web developers jo fast deployment chahte hain
- Designers jo apne designs quickly implement karna chahte hain
- Freelancers jo quick turnaround chahte hain

Seriously guys, agar web development karte ho toh yeh explore karna definitely worth it hai!"

---

**✍️ SEGMENT 6: PROMPT AI (5:00-5:45)**

"Aur finally, last but definitely not the least - **Prompt AI**!

**The problem:**
AI tools toh sab use karte hain, but sahi prompts nahi likhte, toh results bhi sahi nahi aate.

**Solution: Prompt AI**
Yeh tool specifically AI prompts optimize karne ke liye bana hai!

**How it helps:**
- Tumhare basic prompts ko professional prompts mein convert karta hai
- Different AI models ke liye prompts customize karta hai
- Prompt library bhi provide karta hai inspiration ke liye

**Example:**
Instead of writing "make me a logo", Prompt AI suggests: "Create a modern, minimalist logo for a tech startup, using blue and white colors, with geometric shapes, suitable for app icon"

Result? 10x better output!

ChatGPT, Midjourney, ya koi bhi AI tool use karte ho - Prompt AI se better results guaranteed!"

---

**🎯 OUTRO (5:45-6:15)**

"Toh yeh the 6 underrated AI tools jo main personally recommend karta hoon! Sabhi tools ki links description mein mil jayengi.

**Quick recap:**
1. Lover Art - AI artwork
2. Base 44 - Base64 tool
3. Bhendi AI - Hinglish AI assistant
4. Light PDF - PDF editor
5. Vercept - Web development
6. Prompt AI - Prompt optimization

Agar video pasand aaya toh like kar do, aur agar naye ho channel pe toh subscribe kar lo! Aur haan, comment mein batao ki aap already kitne tools use karte ho, aur kaunsa tool aap try karoge!

Next video mein aur amazing tools leke aaunga. Tab tak ke liye, happy creating! Bye! 👋"

---

Yeh complete script hai! Chahiye toh main koi specific section improve kar sakta hoon. Batao kya changes chahiye? 🎬`
    }
    else if (userMessage.includes('lover art') || userMessage.includes('art')) {
      response = `🎨 **LOVER ART SEGMENT (Detailed):**

**Intro Line (Attention Grabber):**
"Sabse pehle baat karte hain Lover Art ke baare mein - aur trust me, yeh tool aapke creative projects ko literally transform kar dega!"

**Main Content:**
"Toh Lover Art kya hai? Yeh ek AI-powered art generation tool hai, aur guys, iska interface itna user-friendly hai ki aap 5 saal ke bachhe ko bhi samjha sakte ho!

**Aap kya kar sakte ho?**
• Digital paintings bana sakte ho professional level ki
• Portraits create kar sakte ho jo realistic lagte hain
• Abstract art, landscapes, fantasy characters - literally anything!
• Social media content, thumbnails, presentations - har jagah use kar sakte ho

**Mera personal experience:**
Maine last month ek thumbnail banaya tha Lover Art se, uspe 10,000+ views aaye. Aur time? Total 5 minutes! Traditional methods mein 2 ghante lagte normally.

**Pro Tips:**
1. Descriptions detail mein do, better results milenge
2. Different styles experiment karo - anime, realistic, watercolor, sab available hai
3. Free version mein daily limit hai, toh morning mein try karo jab servers less busy hote hain

Seriously guys, agar creative work karte ho toh yeh must-try hai!"

**Transition:**
"Toh yeh tha Lover Art, chalo ab next tool dekhte hain..."

Kya aur detail chahiye? Ya kisi specific angle se script chahiye? 😊`
    }
    else if (userMessage.includes('improve') || userMessage.includes('better')) {
      response = `Main aapke script ko improve karne ke liye tayyar hoon!

Aap yeh bata sakte ho:
1. Kaunsa specific section improve karna hai? (Hook, intro, ya koi tool segment)
2. Kya change karna hai? (Length, tone, energy, details?)
3. Target audience kaun hai? (Students, professionals, general audience?)
4. Video ka length kya hona chahiye? (Under 5 mins, 10 mins, etc?)

Ya phir aap direct apna current script paste kar do, main usko improve kar dunga! 🚀`
    }
    else if (userMessage.includes('base 44') || userMessage.includes('base44')) {
      response = `🔧 **BASE 44 SEGMENT (Enhanced):**

**Hook Line:**
"Agli tool developers ke liye ek secret weapon hai - Base 44!"

**Main Script:**
"Dekho, Base 44 naam sunke aap soch rahe honge ki yeh kya technical cheez hai. But guys, yeh actually bahut simple aur useful hai!

**Layman terms mein samjhaun:**
Kabhi aapko ek image ko text format mein convert karna pada? Ya data ko safely transfer karna pada? That's where Base64 encoding aati hai, aur Base 44 yeh kaam lightning-fast karta hai!

**Real-world scenarios:**
1. **For Developers:**
   - APIs test karne ke liye
   - Images ko directly code mein embed karna
   - Data encryption aur security

2. **For Non-Developers:**
   - Files ko text format mein convert karna
   - Data ko compatible format mein change karna
   - Quick encoding/decoding without installing software

**Mere experience se:**
Pichle week client ka ek urgent API integration tha. Base 44 ne literally 5 minutes mein kaam ho gaya jo normally 30 minutes lagta!

**Best Features:**
✅ Instant processing - no waiting
✅ Clean, simple interface - no confusion
✅ Completely free - no hidden charges
✅ Works in browser - no installation needed

**Kisko chahiye:**
Agar aap web development, API testing, ya technical field mein kaam karte ho - yeh tool bookmark kar lo. Bohot kaam aayega!"

**Transition:**
"Base 44 covered, ab chalte hain agle gem pe..."

Chahiye toh technical details aur add kar sakta hoon! Batao? 💻`
    }
    else {
      response = `Main sun raha hoon! Aap mujhse yeh help le sakte ho:

**Script Writing:**
• Video hook/intro likhna
• Individual tool segments
• Complete script (all 6 tools)
• Outro aur CTA (call-to-action)

**Improvements:**
• Existing script ko better banana
• Length adjust karna
• Tone change karna (casual, formal, energetic)
• Audience-specific script

**Specific Help:**
• Transitions between segments
• Engagement hooks
• SEO-friendly titles & descriptions
• Thumbnail ideas

Aap specific request kar sakte ho, ya main suggestions de sakta hoon. Batao kya chahiye? 😊`
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
