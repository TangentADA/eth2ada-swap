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

1. **Fork the Repository**  
   Click “Fork” on [https://github.com/TangentADA/eth2ada-rc](https://github.com/TangentADA/eth2ada-rc)

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/eth2ada-rc.git
   cd eth2ada-rc

3. **Create a New Branch**

   ```bash
   git checkout -b add-term-<term-name>
   Replace <term-name> with a short identifier (e.g., add-term-utxo).

4. **Edit the Dictionary File** Open data/news_data.js. Append a new object to the single_news_data array following this structure:

   javascript
{
  id: "term_7",
  text: "A decentralized application running on a blockchain...",
  title: "DApp",
  description: "On Cardano, a DApp leverages Plutus scripts to execute decentralized logic, validated by the network.",
  descriptionETH: "On Ethereum, a DApp uses smart contracts deployed on the blockchain to perform actions.",
  image: "/images/blog/term_7.jpg",
  date: "10 Apr",
  time: "2 min read",
  subImages: ["/images/blog/gallery_1.jpg"],
  authorImage: "/images/logo-circle.png",
  authorName: "Eth2Ada Academy"
}

5. **Commit Your Changes**

``bash
git add data/news_data.js
git commit -m "Add new term: DApp".

6. **Push to GitHub**

`bash
git push origin add-term-<term-name>.

7. **Submit a Pull Request** 

Go to your fork on GitHub
Click Pull Requests > New Pull Request
Select your branch and compare with the main branch of the original repo
Write a clear title and description, then submit

## ✏️ Editing an Existing Term
To edit a term (e.g., fix a typo or add detail):

1. Fork and clone the repo as above

2. Create a branch:

bash
git checkout -b edit-term-<term-name>

3. Open data/news_data.js
Locate the relevant object and update its fields (description, descriptionETH, text, etc.)

4. Commit your changes:

bash
git add data/news_data.js
git commit -m "Update term: <term-name>"

5. Push and open a PR as described above

### 🧠 Dictionary Term Structure
Each term in data/news_data.js must follow this object schema:


## Field	Required	Description
id	✅ Yes	Unique identifier (e.g., "term_7")
title	✅ Yes	Term title (e.g., "UTXO", "Slot")
text	✅ Yes	Short preview/summary of the term
description	✅ Yes	Detailed explanation in Cardano context
descriptionETH	✅ Yes	Detailed Ethereum equivalent (use "---" if not applicable)
image	Optional	Main image path
date	Optional	Date of last update (e.g., "5 Feb")
time	Optional	Reading time (e.g., "3 min read")
subImages	Optional	Array of additional images
authorImage	Optional	Path to author’s image
authorName	Optional	Author’s name or group (e.g., "Eth2Ada Academy")
✅ Submission Rules
PRs must contain a single commit

Modify only the file data/news_data.js

Each PR should add or edit only one term

IDs must be unique and follow the format "term_X"

Ensure the file remains valid JavaScript (no trailing commas, typos, etc.)

### 🌐 Website
All dictionary content is publicly available at https://eth2ada.com, rendered directly from the news_data.js file. Once a PR is merged, the changes will appear live after the next deployment.

### 🎁 Contributor Rewards: Airdrop Incoming!
We’re planning an exclusive token airdrop to thank our contributors!

## How to Qualify
Contribute a term or edit that gets merged into the main branch.

## Airdrop Details
Contributors tracked by GitHub usernames

Rewards scale with contribution frequency

Stay tuned for full token launch info!

Pro Tip: The more you contribute, the more you can earn. Follow updates here or on https://eth2ada.com.

###💡 Tips
Keep your explanations educational and beginner-friendly.

Use neutral tone and avoid jargon where possible.

Ensure images exist in /images/blog/ or are externally hosted.

If you need help, open an issue on the repo or reach out via GitHub.

Let’s build the ultimate Cardano-to-Ethereum dictionary—together! 🚀




