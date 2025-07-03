
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
    image: '/src/assets/blog-1.jpg',
    content: `
# Towards Measurable Security in Agentic AI

Once the domain of experimental prototypes, today’s agents can manage tools, issue commands, and orchestrate complex workflows across multiple components. While functionality and efficiency have been eagerly benchmarked, **security evaluation** is just beginning to gain the structured attention it deserves. Foundational frameworks — such as the <a href="https://vineethsai.github.io/aivss/">OWASP Agentic AI Top 10 Vulnerability Scoring System (AIVSS)</a>, the MAESTRO framework, and the <a href="https://cloudsecurityalliance.org/research/working-groups/ai-safety-initiative">CSA’s Red Teaming Guide</a> — have laid essential groundwork, thanks to the leadership of experts like Ken Huang.

These contributions provide a robust foundation for evaluating agentic risk. Now, the challenge lies in **wider adoption** and integration: building the infrastructure to make vulnerability scoring and quantitative risk assessments routine across ecosystems and diverse contexts. As agentic AI scales, so must our commitment to making its security **measurable, teachable, and accessible**. Automation and developer integration for these risks are critical, making this an exciting space for development.

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*WqwYP5kmg1na9jFP" alt="An overview of the AIVSS methodology — https://vineethsai.github.io/aivss/" />
  <figcaption>An overview of the AIVSS methodology — https://vineethsai.github.io/aivss/</figcaption>
</figure>

This article surveys the current state of Agentic AI security benchmarking and adoption. With the emergence of infrastructure like <a href="https://www.media.mit.edu/projects/mit-nanda/overview/#:~:text=NANDA%20%28Networked%20Agents%20and%20Decentralized,of%20autonomous%20AI%20agents%20that">MIT’s NANDA</a>, a team at MIT creating the “Internet of AI Agents,” the path is clearer than ever for a standardized approach to security evaluation. The challenge now is not identifying risks — they’re well-documented — but turning that knowledge into **testable, measurable, and repeatable metrics** across ecosystems and contexts. As a student developer, I believe we urgently need to **bring security literacy into the agent-building process**. More and more student internships now ask not for Python fluency, but for experience working with MCP servers — architectures that didn’t even exist a year ago.

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*i2I58MrMkdJkd9Qj" alt="NANDA" />
  <figcaption>[NANDA (Networked Agents And Decentralized AI) builds on Anthropic’s Model Context Protocol (MCP) to create a true Internet of AI Agents. While MCP provides standardized interaction between AI agents, tools and resources, NANDA adds the critical infrastructure needed for distributed agent intelligence at scale. From https://nanda.media.mit.edu/.</figcaption>
</figure>

NANDA (Networked Agents And Decentralized AI) builds on Anthropic’s Model Context Protocol (MCP) to create a true Internet of AI Agents. While MCP provides standardized interaction between AI agents, tools and resources, NANDA adds the critical infrastructure needed for distributed agent intelligence at scale. From https://nanda.media.mit.edu/.

This is especially urgent as agentic systems grow more autonomous, connected, and permissioned. When agents can write to databases, run shell commands, or coordinate across frameworks, their vulnerabilities become networked liabilities. As OWASP AIVSS and the CSA Agentic AI Red Teaming Guide both outline, an agent’s threat surface is shaped not just by its code, but by its autonomy, memory, tool usage, and delegation behavior.

## Understanding Multi-Agent System Infrastructure

## Current Threats in Multi-Agent Workflows
The architecture behind multi-agent systems (MAS) is undergoing rapid evolution, moving from siloed implementations to visions of web-scale interoperability. At the core of this transformation is the recognition that agents are no longer single-threaded tools operating in isolation — they’re collaborative, persistent, and increasingly responsible for orchestrating mission-critical workflows.

Several architectural protocols have emerged to facilitate coordination across autonomous agents:

- Model Context Protocol (MCP) by Anthropic enables agents to interface with tools and context servers, focusing on agent-to-environment communication.
- Agent2Agent (A2A) by Google introduces structured inter-agent communication via JSON-RPC and AgentCards, enabling agents to negotiate, delegate, and verify identities.
- Agent Communication Protocol (ACP) from IBM embraces RESTful paradigms for agent messaging and orchestration, emphasizing developer-accessible infrastructure.
- NANDA, MIT’s experimental agent registry, builds on top of MCP to support distributed agent discovery and verifiable capability declarations through a federated system of AgentFacts.
Here is a great overview of more protocols and their use cases by Yang et al’s A Survey of AI Agent Protocols:

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LBEj8Kl00SJP3kbXrqq35A.png" alt="Overview of popular agent protocols. From A Survey of AI Agent Protocols." />
  <figcaption>Overview of popular agent protocols. <a href="https://arxiv.org/abs/2504.16736">From A Survey of AI Agent Protocols</a>.</figcaption>
</figure>

Also, a great overview of how AI development has evolved over the past few years from the same paper:

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*D1VwITPWAnNnfAWJvYDdwA.png" alt="A timeline of the development of agent protocols." />
  <figcaption>A timeline of the development of agent protocols. From A Survey of AI Agent Protocols.</figcaption>
</figure>

Some of these protocols admittedly share similarities. For instance, A2A, MCP, and ACP each support some core primitives — identity, messaging, and capability expression — but still have space to develop in discovery, state persistence, and memory consistency. **Despite their strengths, these frameworks may operate in isolation**. The result is a fragmented ecosystem where interoperability is the exception, not the norm. In fact, NANDA’s paper calls for <a href="https://github.com/aidecentralized/nandapapers/blob/main/Collaborative%20Agentic%20AI%20Needs%20Interoperability%20Across%20Ecosystems.pdf">interoperability across ecosystems</a>, asking for the “adoption of minimal standards” rather than waiting for dominant solutions to emerge.

If you’re interested in understanding how some of the current protocols work together, here’s another great <a href="https://medium.com/@gaurisharma1686/towards-measurable-security-in-agentic-ai-2d0cc4147fe8#:~:text=here%E2%80%99s%20another%20great-,article,-.%20To%20quote%20the">article</a>. To quote the author, Edwin Lisowski, “In short: we’re early. But how we build and adopt these standards now will shape whether AI agents become a cohesive ecosystem — or a patchwork of silos.” As interoperability evolves, it will increasingly shape the security architectures we design and deploy.

## Current Threats in Multi-Agent Workflows

<a href="https://aivss.owasp.org">OWASP’s</a> Agentic AI Top 10 security risks covers the most imminent threats in these systems. The group’s initial publication is slated for release in the upcoming weeks, but their ongoing work and GitHub are available at aivss.owasp.org. The core idea is straightforward: every interaction layer — whether between agents, tools, databases, or users — introduces potential vulnerabilities unless explicitly secured. OWASP AIVSS is developing a security calculator to quantify agentic risk in a standardized, actionable format — laying the groundwork for consistent evaluation across systems. It will be equally important to track how automation evolves in this space, potentially enabling real-time scoring, integration into CI/CD pipelines, and automated risk mitigation. Here’s a summary of AIVSS’s outlined risks:

### Top 10 Agentic AI Threats (AIVSS):

1. <strong>Agentic AI Tool Misuse</strong> — When AI agents interact with external tools, flawed logic, malicious tool registration, or adversarial inputs can cause unintended or harmful actions. A notable example is tool squatting, where agents are tricked into calling malicious tools due to deceptive naming or schema manipulation.
2. <strong>Agent Access Control Violation</strong> — Attackers may exploit or override an agent’s permissions, causing it to perform tasks outside its authorized scope. These breaches often go unnoticed because the agent appears to behave legitimately while conducting unauthorized actions. 
3. <strong>Agent Impact Chain and Blast Radius</strong> — A compromise in one agent can ripple across connected systems, escalating a local vulnerability into a system-wide failure. This is especially dangerous in interconnected ecosystems where agents hold cross-domain access.  
4. <strong>Agent Orchestration and Multi-Agent Exploitation</strong> — Security flaws in how agents coordinate and trust one another can be exploited to manipulate or hijack multi-agent workflows. These interactions form complex, distributed attack surfaces vulnerable to system-wide disruption.  
5. <strong>Deepfake Agent Identity</strong> — AI-generated impersonation allows agents to present fake identities or credentials, deceiving both humans and other systems. This manipulation undermines trust and can lead to fraud, unauthorized access, or social engineering attacks.
6. <strong>Agent Memory and Context Manipulation</strong> — Attackers can tamper with how agents store or recall context, leading to compromised decision-making and leaked information. Since agents rely on persistent memory, such manipulation can have long-term effects.
7. <strong>Agent Critical Systems Interaction</strong> — When agents interface with operational or physical infrastructure, errors or attacks can lead to real-world consequences. These include malfunctions, safety risks, or unauthorized control over sensitive systems.
8. <strong>Agent Supply Chain and Dependency Attacks</strong> — Vulnerabilities in third-party tools, libraries, or infrastructure supporting AI agents can be exploited to introduce malware or backdoors. These attacks often compromise multiple agents at once by targeting trusted development pipelines.
9. <strong>Agent Untraceability</strong> — Agents often assume temporary roles or permissions, making it hard to trace actions back to a specific user or origin. This lack of accountability complicates auditing, incident response, and forensic analysis.
10. <strong>Agent Goal and Instruction Manipulation</strong> — By manipulating how agents interpret commands, attackers can cause them to behave maliciously while appearing normal. This often involves exploiting natural language processing to inject harmful intent into otherwise benign-looking instructions.

<figure>
  <img src="https://medium.com/@gaurisharma1686/towards-measurable-security-in-agentic-ai-2d0cc4147fe8#:~:text=By%20manipulating%20how%20agents%20interpret%20commands%2C%20attackers%20can%20cause%20them%20to%20behave%20maliciously%20while%20appearing%20normal.%20This%20often%20involves%20exploiting%20natural%20language%20processing%20to%20inject%20harmful%20intent%20into%20otherwise%20benign%2Dlooking%20instructions." alt="The AIVSS Framework — https://vineethsai.github.io/aivss/" />
  <figcaption>The AIVSS Framework — https://vineethsai.github.io/aivss/ </figcaption>
</figure>

---

## Quantitative Security Benchmarking Efforts

As OWASP AIVSS’s work underscores, security in multi-agent systems (MAS) must be measurable to be actionable. While early benchmarks like HarmBench, AgentHarm, COMMA, and Cybench offer frameworks for assessing harmful LLM behavior, they primarily target single-agent scenarios or isolated adversarial robustness. What’s missing is a structured approach to evaluating the compounded risks that emerge when agents coordinate, delegate, and operate in interconnected environments — a critical gap and a ripe area for development.

The path forward is clear: agent security must be built in, not bolted on. IDE plugins, CI/CD hooks, and agent graph visualizers that surface stale permissions or insecure delegation chains will be essential to making MAS security both actionable and teachable. Just as crucial is engaging students and early developers in this foundational work — helping them build awareness of infrastructure-level risks and ensuring their research and practices stay relevant in a landscape increasingly shaped by code generation tools and autonomous development practices.
    `
  },
  '2': {
    title: 'Visualizing Agent Misalignment in Workflow Graphs',
    date: 'May 28, 2025',
    author: 'Michael Rodriguez',
    authorRole: 'Lead Security Engineer',
    image: '/src/assets/blog-2.jpg',
    content: `
      <p>Identifying agent misalignment before it causes security issues is a critical challenge in multi-agent systems. This article explores how graph visualization techniques can help security teams spot potential problems early.</p>
      
      <h2>The Challenge of Agent Misalignment</h2>
      
      <p>When multiple AI agents work together, subtle misalignments in their goals, constraints, or understanding can create security vulnerabilities that are difficult to detect through traditional testing methods.</p>
      
      <p>These misalignments often only become apparent when specific conditions are met, making them particularly dangerous in production environments.</p>
      
      <h2>Graph Visualization as a Diagnostic Tool</h2>
      
      <p>Graph visualizations provide an intuitive way to represent complex agent interactions and identify potential misalignments before they cause problems.</p>
      
      <h3>Key Visualization Techniques</h3>
      
      <ol>
        <li><strong>Goal Alignment Maps:</strong> Visualize how each agent's goals relate to the system's overall objectives and to other agents' goals.</li>
        <li><strong>Communication Flow Diagrams:</strong> Track message patterns between agents to identify unusual or potentially problematic communication patterns.</li>
        <li><strong>Resource Access Graphs:</strong> Map which agents access which resources to identify potential privilege escalation paths.</li>
        <li><strong>Decision Boundary Visualizations:</strong> Show where agents might make conflicting decisions about the same inputs.</li>
      </ol>
      
      <h2>Case Study: Detecting Misalignment in a Financial System</h2>
      
      <p>In a recent project, we used graph visualization to analyze a multi-agent system designed for automated financial trading. The system included agents for market analysis, risk assessment, trade execution, and compliance monitoring.</p>
      
      <p>Our visualization revealed a subtle misalignment: under certain market conditions, the risk assessment agent and the trade execution agent had conflicting interpretations of acceptable risk levels. This misalignment could have led to unauthorized trades that violated the system's risk parameters.</p>
      
      <h2>Implementation Guide: Building Your Own Visualization System</h2>
      
      <p>To implement effective agent misalignment visualization:</p>
      
      <h3>1. Instrument Your Agent System</h3>
      
      <p>Add logging to capture:</p>
      <ul>
        <li>All inter-agent messages with their full content</li>
        <li>Resource access attempts (successful and failed)</li>
        <li>Decision points with inputs and outputs</li>
        <li>Goal state evaluations</li>
      </ul>
      
      <h3>2. Build the Visualization Layer</h3>
      
      <p>Create visualizations that show:</p>
      <ul>
        <li>Agent nodes with their current goals and states</li>
        <li>Communication edges showing message frequency and content types</li>
        <li>Resource nodes with access patterns</li>
        <li>Temporal patterns to identify changes over time</li>
      </ul>
      
      <h3>3. Add Anomaly Detection</h3>
      
      <p>Implement algorithms to automatically flag potential misalignments:</p>
      <ul>
        <li>Unexpected communication patterns</li>
        <li>Conflicting goal states</li>
        <li>Unusual resource access sequences</li>
        <li>Temporal anomalies in agent behavior</li>
      </ul>
      
      <h2>Visualization Tools and Libraries</h2>
      
      <p>Several tools and libraries can help you build effective agent misalignment visualizations:</p>
      
      <ul>
        <li><strong>D3.js:</strong> Powerful JavaScript library for custom interactive visualizations</li>
        <li><strong>Neo4j:</strong> Graph database with built-in visualization capabilities</li>
        <li><strong>Gephi:</strong> Open-source network analysis and visualization software</li>
        <li><strong>Graphistry:</strong> GPU-accelerated graph visualization for large-scale systems</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Graph visualization provides a powerful tool for identifying potential agent misalignments before they cause security problems. By visualizing goal relationships, communication patterns, resource access, and decision boundaries, security teams can spot subtle issues that might otherwise go undetected until they cause problems in production.</p>
      
      <p>In our next article, we'll explore how to establish comprehensive security benchmarks for multi-agent systems to ensure consistent evaluation across different architectures and deployment scenarios.</p>
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
            
            <div className="blog-post-share">
              <span>Share this article:</span>
              <div className="blog-post-share-buttons">
                <button className="share-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="share-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <button className="share-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="share-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="related-posts section">
        <div className="container">
          <h2 className="section-title fade-in">Related Articles</h2>
          <div className="related-posts-grid fade-in">
            {Object.entries(blogPostsData)
              .filter(([postId]) => postId !== id)
              .slice(0, 2)
              .map(([postId, postData]) => (
                <div className="related-post-card" key={postId}>
                  <div className="related-post-image" style={{ backgroundImage: `url(${postData.image})` }}>
                    <div className="related-post-overlay"></div>
                  </div>
                  <div className="related-post-content">
                    <span className="related-post-date">{postData.date}</span>
                    <h3 className="related-post-title">{postData.title}</h3>
                    <Link to={`/blog/${postId}`} className="related-post-link">
                      Read Article <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      <section className="blog-subscribe section">
        <div className="container">
          <div className="subscribe-content fade-in">
            <h2 className="section-title text-center">Stay Updated</h2>
            <p className="subscribe-text text-center">
              Subscribe to our newsletter for the latest research, security insights, and agent safety best practices.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address" className="subscribe-input" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;