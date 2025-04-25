# Cardano-to-Ethereum Dictionary Registry

Welcome to the open-source registry for the **Cardano-to-Ethereum Dictionary**, available at [https://eth2ada.com](https://eth2ada.com). This project is a community-driven initiative to define and compare blockchain terms across the Cardano and Ethereum ecosystems—highlighting their similarities, differences, and unique features in a clear and accessible way.

---

## 📚 Background

This dictionary serves as a dynamic resource to help developers, researchers, and blockchain enthusiasts better understand key concepts across Cardano and Ethereum. Topics include:

- Consensus mechanisms  
- Transaction models  
- Smart contract paradigms  

The dictionary is stored as a JavaScript array of objects inside `data/news_data.js`. A public frontend at [eth2ada.com](https://eth2ada.com) renders this data, and the GitHub repo at [github.com/TangentADA/eth2ada-rc](https://github.com/TangentADA/eth2ada-rc) is open for contributions via Pull Requests (PRs).

We welcome input from anyone with a GitHub account. Let’s educate and connect both communities together!

---

## ⚙️ Contribution Workflow

### ✅ Adding a New Term

### Adding a New Term

1. **Fork the Repository**  
   Click “Fork” on [github.com/TangentADA/eth2ada-rc](https://github.com/TangentADA/eth2ada-rc).

2. **Clone Your Fork**  
   ```bash
   git clone https://github.com/YOUR_USERNAME/eth2ada-rc.git
   cd eth2ada-rc
   
3. **Create a Branch**
   ```bash
   git checkout -b add-term-<term-name>       

Replace <term-name> with a short identifier (e.g., utxo).

4. **Edit the Dictionary**
   
Append a new object to data/news_data.js with a comma and this structure:  

   ```javascript
   {
        id: "term_7",
        title: "DApp",
        text: "A decentralized application running on a blockchain...",
        description: "On Cardano, DApps use Plutus scripts for decentralized logic, validated by the network.",
        descriptionETH: "On Ethereum, DApps rely on smart contracts deployed on the blockchain.",
        image: "/images/blog/term_7.jpg",
        date: "10 Apr",
        time: "2 min read",
        subImages: ["/images/blog/gallery_1.jpg"],
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy"
   }
```

5. **Commit the Changes**

   ```bash
   git add data/news_data.js
   git commit -m "Add new term: DApp"
```
```


Push to GitHub  

  ```bash
   git push origin add-term-<term-name>
```

6. **Submit a Pull Request**

From your fork, create a PR comparing your branch to the main repo’s main branch. Include a clear title and description.


### Editing an Existing Term

Fork and clone the repo as above.
Create a branch:

```bash
   git checkout -b edit-term-<term-name>
```

Update the relevant object in data/news_data.js.
Commit, push, and submit a PR as described.

### Term Structure

Each term in data/news_data.js must follow this schema:

| Field         | Required | Description                                           |
|---------------|----------|-------------------------------------------------------|
| `id`          | Yes      | Unique ID (e.g., `term_7`)                            |
| `title`       | Yes      | Term name (e.g., `UTXO`)                              |
| `text`        | Yes      | Short summary                                         |
| `description` | Yes      | Cardano-specific explanation                          |
| `descriptionETH` | Yes   | Ethereum-specific explanation (use `---` if N/A)      |
| `image`       | Optional | Main image path                                       |
| `date`        | Optional | Last update (e.g., `5 Feb`)                           |
| `time`        | Optional | Reading time (e.g., `3 min read`)                     |
| `subImages`   | Optional | Array of additional image paths                       |
| `authorImage` | Optional | Author image path                                     |
| `authorName`  | Optional | Author name (e.g., `Eth2Ada Academy`)                 |


### Submission Rules
One commit per PR.
Modify only data/news_data.js.
Add or edit one term per PR.
Use unique term_X IDs.
Ensure valid JavaScript (no trailing commas, typos).

## Website
Content is rendered at eth2ada.com from data/news_data.js. Merged PRs go live after the next deployment.

## Contributor Rewards: Airdrop
Contributors are eligible for an upcoming token airdrop!
Qualification: Have a term or edit merged into the main branch.
Tracking: Via GitHub usernames.
Rewards: Scale with contribution frequency.
Updates: Follow eth2ada.com or the repo.

## Tips
Write beginner-friendly, neutral explanations.
Avoid jargon where possible.
Verify image paths in /images/blog/ or use external hosting.
Need help? Open an issue or contact us via GitHub.
Let’s build the ultimate Cardano-to-Ethereum dictionary together!

## Experimental Build 
https://github.com/TangentADA/eth2ada-AI
