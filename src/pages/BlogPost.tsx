import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import { marked } from 'marked';

// Mock blog post data
const blogPostsData = {
  '1': {
    title: 'Towards Measurable Security in Agentic AI',
    date: 'June 10, 2025',
    author: 'Gauri Sharma',
    authorRole: 'Student Developer',
    image: '/blog-1-card.jpg',
    content: `
# Towards Measurable Security in Agentic AI

Once the domain of experimental prototypes, today's agents can manage tools, issue commands, and orchestrate complex workflows across multiple components. While functionality and efficiency have been eagerly benchmarked, **security evaluation** is just beginning to gain the structured attention it deserves. Foundational frameworks — such as the <a href="https://vineethsai.github.io/aivss/">OWASP Agentic AI Top 10 Vulnerability Scoring System (AIVSS)</a>, the MAESTRO framework, and the <a href="https://cloudsecurityalliance.org/research/working-groups/ai-safety-initiative">CSA's Red Teaming Guide</a> — have laid essential groundwork, thanks to the leadership of experts like Ken Huang.

These contributions provide a robust foundation for evaluating agentic risk. Now, the challenge lies in **wider adoption** and integration: building the infrastructure to make vulnerability scoring and quantitative risk assessments routine across ecosystems and diverse contexts. As agentic AI scales, so must our commitment to making its security **measurable, teachable, and accessible**. Automation and developer integration for these risks are critical, making this an exciting space for development.

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*WqwYP5kmg1na9jFP" alt="An overview of the AIVSS methodology — https://vineethsai.github.io/aivss/" />
  <figcaption>An overview of the AIVSS methodology — https://vineethsai.github.io/aivss/</figcaption>
</figure>

This article surveys the current state of Agentic AI security benchmarking and adoption. With the emergence of infrastructure like <a href="https://www.media.mit.edu/projects/mit-nanda/overview/#:~:text=NANDA%20%28Networked%20Agents%20and%20Decentralized,of%20autonomous%20AI%20agents%20that">MIT's NANDA</a>, a team at MIT creating the "Internet of AI Agents," the path is clearer than ever for a standardized approach to security evaluation. The challenge now is not identifying risks — they're well-documented — but turning that knowledge into **testable, measurable, and repeatable metrics** across ecosystems and contexts. As a student developer, I believe we urgently need to **bring security literacy into the agent-building process**. More and more student internships now ask not for Python fluency, but for experience working with MCP servers — architectures that didn't even exist a year ago.

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*i2I58MrMkdJkd9Qj" alt="NANDA" />
  <figcaption>[NANDA (Networked Agents And Decentralized AI) builds on Anthropic's Model Context Protocol (MCP) to create a true Internet of AI Agents. While MCP provides standardized interaction between AI agents, tools and resources, NANDA adds the critical infrastructure needed for distributed agent intelligence at scale. From https://nanda.media.mit.edu/.</figcaption>
</figure>

NANDA (Networked Agents And Decentralized AI) builds on Anthropic's Model Context Protocol (MCP) to create a true Internet of AI Agents. While MCP provides standardized interaction between AI agents, tools and resources, NANDA adds the critical infrastructure needed for distributed agent intelligence at scale. From https://nanda.media.mit.edu/.

This is especially urgent as agentic systems grow more autonomous, connected, and permissioned. When agents can write to databases, run shell commands, or coordinate across frameworks, their vulnerabilities become networked liabilities. As OWASP AIVSS and the CSA Agentic AI Red Teaming Guide both outline, an agent's threat surface is shaped not just by its code, but by its autonomy, memory, tool usage, and delegation behavior.

## Understanding Multi-Agent System Infrastructure

## Current Threats in Multi-Agent Workflows
The architecture behind multi-agent systems (MAS) is undergoing rapid evolution, moving from siloed implementations to visions of web-scale interoperability. At the core of this transformation is the recognition that agents are no longer single-threaded tools operating in isolation — they're collaborative, persistent, and increasingly responsible for orchestrating mission-critical workflows.

Several architectural protocols have emerged to facilitate coordination across autonomous agents:

- Model Context Protocol (MCP) by Anthropic enables agents to interface with tools and context servers, focusing on agent-to-environment communication.
- Agent2Agent (A2A) by Google introduces structured inter-agent communication via JSON-RPC and AgentCards, enabling agents to negotiate, delegate, and verify identities.
- Agent Communication Protocol (ACP) from IBM embraces RESTful paradigms for agent messaging and orchestration, emphasizing developer-accessible infrastructure.
- NANDA, MIT's experimental agent registry, builds on top of MCP to support distributed agent discovery and verifiable capability declarations through a federated system of AgentFacts.
Here is a great overview of more protocols and their use cases by Yang et al's A Survey of AI Agent Protocols:

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LBEj8Kl00SJP3kbXrqq35A.png" alt="Overview of popular agent protocols. From A Survey of AI Agent Protocols." />
  <figcaption>Overview of popular agent protocols. <a href="https://arxiv.org/abs/2504.16736">From A Survey of AI Agent Protocols</a>.</figcaption>
</figure>

Also, a great overview of how AI development has evolved over the past few years from the same paper:

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*D1VwITPWAnNnfAWJvYDdwA.png" alt="A timeline of the development of agent protocols." />
  <figcaption>A timeline of the development of agent protocols. From A Survey of AI Agent Protocols.</figcaption>
</figure>

Some of these protocols admittedly share similarities. For instance, A2A, MCP, and ACP each support some core primitives — identity, messaging, and capability expression — but still have space to develop in discovery, state persistence, and memory consistency. **Despite their strengths, these frameworks may operate in isolation**. The result is a fragmented ecosystem where interoperability is the exception, not the norm. In fact, NANDA's paper calls for <a href="https://github.com/aidecentralized/nandapapers/blob/main/Collaborative%20Agentic%20AI%20Needs%20Interoperability%20Across%20Ecosystems.pdf">interoperability across ecosystems</a>, asking for the "adoption of minimal standards" rather than waiting for dominant solutions to emerge.

If you're interested in understanding how some of the current protocols work together, here's another great <a href="https://medium.com/@gaurisharma1686/towards-measurable-security-in-agentic-ai-2d0cc4147fe8#:~:text=here's%20another%20great-,article,-.%20To%20quote%20the">article</a>. To quote the author, Edwin Lisowski, "In short: we're early. But how we build and adopt these standards now will shape whether AI agents become a cohesive ecosystem — or a patchwork of silos." As interoperability evolves, it will increasingly shape the security architectures we design and deploy.

## Current Threats in Multi-Agent Workflows

<a href="https://aivss.owasp.org">OWASP's</a> Agentic AI Top 10 security risks covers the most imminent threats in these systems. The group's initial publication is slated for release in the upcoming weeks, but their ongoing work and GitHub are available at aivss.owasp.org. The core idea is straightforward: every interaction layer — whether between agents, tools, databases, or users — introduces potential vulnerabilities unless explicitly secured. OWASP AIVSS is developing a security calculator to quantify agentic risk in a standardized, actionable format — laying the groundwork for consistent evaluation across systems. It will be equally important to track how automation evolves in this space, potentially enabling real-time scoring, integration into CI/CD pipelines, and automated risk mitigation. Here's a summary of AIVSS's outlined risks:

### Top 10 Agentic AI Threats (AIVSS):

1. <strong>Agentic AI Tool Misuse</strong> — When AI agents interact with external tools, flawed logic, malicious tool registration, or adversarial inputs can cause unintended or harmful actions. A notable example is tool squatting, where agents are tricked into calling malicious tools due to deceptive naming or schema manipulation.
2. <strong>Agent Access Control Violation</strong> — Attackers may exploit or override an agent's permissions, causing it to perform tasks outside its authorized scope. These breaches often go unnoticed because the agent appears to behave legitimately while conducting unauthorized actions. 
3. <strong>Agent Impact Chain and Blast Radius</strong> — A compromise in one agent can ripple across connected systems, escalating a local vulnerability into a system-wide failure. This is especially dangerous in interconnected ecosystems where agents hold cross-domain access.  
4. <strong>Agent Orchestration and Multi-Agent Exploitation</strong> — Security flaws in how agents coordinate and trust one another can be exploited to manipulate or hijack multi-agent workflows. These interactions form complex, distributed attack surfaces vulnerable to system-wide disruption.  
5. <strong>Deepfake Agent Identity</strong> — AI-generated impersonation allows agents to present fake identities or credentials, deceiving both humans and other systems. This manipulation undermines trust and can lead to fraud, unauthorized access, or social engineering attacks.
6. <strong>Agent Memory and Context Manipulation</strong> — Attackers can tamper with how agents store or recall context, leading to compromised decision-making and leaked information. Since agents rely on persistent memory, such manipulation can have long-term effects.
7. <strong>Agent Critical Systems Interaction</strong> — When agents interface with operational or physical infrastructure, errors or attacks can lead to real-world consequences. These include malfunctions, safety risks, or unauthorized control over sensitive systems.
8. <strong>Agent Supply Chain and Dependency Attacks</strong> — Vulnerabilities in third-party tools, libraries, or infrastructure supporting AI agents can be exploited to introduce malware or backdoors. These attacks often compromise multiple agents at once by targeting trusted development pipelines.
9. <strong>Agent Untraceability</strong> — Agents often assume temporary roles or permissions, making it hard to trace actions back to a specific user or origin. This lack of accountability complicates auditing, incident response, and forensic analysis.
10. <strong>Agent Goal and Instruction Manipulation</strong> — By manipulating how agents interpret commands, attackers can cause them to behave maliciously while appearing normal. This often involves exploiting natural language processing to inject harmful intent into otherwise benign-looking instructions.

<figure>
  <img src="/blog-7.jpg"/>
  <figcaption style="justify-self:center">The AIVSS Framework — <a href="https://vineethsai.github.io/aivss">https://vineethsai.github.io/aivss/</a> </figcaption>
</figure>

---

## Quantitative Security Benchmarking Efforts

As OWASP AIVSS's work underscores, security in multi-agent systems (MAS) must be measurable to be actionable. While early benchmarks like HarmBench, AgentHarm, COMMA, and Cybench offer frameworks for assessing harmful LLM behavior, they primarily target single-agent scenarios or isolated adversarial robustness. What's missing is a structured approach to evaluating the compounded risks that emerge when agents coordinate, delegate, and operate in interconnected environments — a critical gap and a ripe area for development.

The path forward is clear: agent security must be built in, not bolted on. IDE plugins, CI/CD hooks, and agent graph visualizers that surface stale permissions or insecure delegation chains will be essential to making MAS security both actionable and teachable. Just as crucial is engaging students and early developers in this foundational work — helping them build awareness of infrastructure-level risks and ensuring their research and practices stay relevant in a landscape increasingly shaped by code generation tools and autonomous development practices.
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get post data based on ID
  const post = id && blogPostsData[id as keyof typeof blogPostsData];
  
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="blog-post-page">
      <div className="blog-post-hero" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="blog-post-hero-overlay"></div>
        <div className="container">
          <div className="blog-post-hero-content fade-in">
            <Link to="/blog" className="blog-post-back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Blog
            </Link>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <div className="blog-post-author">
                <div className="blog-post-author-avatar">
                  {post.author.charAt(0)}
                </div>
                <div className="blog-post-author-info">
                  <span className="blog-post-author-name">{post.author}</span>
                  <span className="blog-post-author-role">{post.authorRole}</span>
                </div>
              </div>
              <span className="blog-post-date">{post.date}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="blog-post-content section">
        <div className="container">
          <div className="blog-post-container fade-in">
            <article className="blog-post-article" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}></article>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;