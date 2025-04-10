# Cardano-to-Ethereum Dictionary Registry

This is the open-source registry for the Cardano-to-Ethereum Dictionary, hosted at [https://eth2ada.com/](https://eth2ada.com/). This repository provides a community-driven collection of terms and concepts that bridge the Cardano and Ethereum ecosystems, explaining their similarities, differences, and unique features in a clear, accessible way.

## Background

This repository serves as a dynamic, community-maintained dictionary to map technical blockchain terms between Cardano and Ethereum. It’s designed to help developers, enthusiasts, and newcomers understand key concepts across these two platforms, such as consensus mechanisms, transaction models, and smart contract paradigms.

The dictionary is stored as a JavaScript file containing an array of term objects, accessible in the `data/news_data.js` file. A public website at [https://eth2ada.com/](https://eth2ada.com/) renders this data for users, while the GitHub repository at [https://github.com/TangentADA/eth2ada-rc](https://github.com/TangentADA/eth2ada-rc) allows anyone to contribute new terms or update existing ones via Pull Requests (PRs).

This project is open-source and welcomes contributions from anyone with a GitHub account, fostering a collaborative effort to educate and connect the Cardano and Ethereum communities.

## Process

### New Term Registration

To add a new term to the dictionary, contributors submit a GitHub Pull Request modifying the `data/news_data.js` file by appending a new term object to the `single_news_data` array. Submissions are subject to automated syntax checking and human review before being merged.

### Updating Existing Entries

To modify an existing term, contributors submit a GitHub Pull Request editing the relevant object within the `single_news_data` array in `data/news_data.js`. Updates follow the same validation process as new submissions.

## Semantic Content of Dictionary Entries

Each term in the dictionary is represented as a JavaScript object with the following fields:

| Name           | Required/Optional | Description                                                                                   |
|----------------|-------------------|-----------------------------------------------------------------------------------------------|
| `id`           | Required          | A unique identifier for the term (e.g., `"term_1"`), used as a key for reference.            |
| `text`         | Required          | A short preview of the term’s explanation, suitable for summaries or previews.              |
| `title`        | Required          | A human-readable title for the term (e.g., `"UTXO"` or `"Smart Contract / Policy Script"`).  |
| `description`  | Required          | A detailed explanation of the term in the context of Cardano, suitable for educational use.  |
| `descriptionETH` | Required       | A detailed explanation of the term in the context of Ethereum (use `"---"` if not applicable). |
| `image`        | Optional          | A path to a primary image (e.g., `"/images/blog/term_1.jpg"`) for visual representation.    |
| `date`         | Optional          | The date of entry creation or last update (e.g., `"5 Feb"`).                                |
| `time`         | Optional          | Estimated reading time (e.g., `"3 min read"`).                                              |
| `subImages`    | Optional          | An array of additional image paths (e.g., `["/images/blog/gallery_1.jpg"]`).                |
| `authorImage`  | Optional          | A path to the author’s image (e.g., `"/images/logo-circle.png"`).                           |
| `authorName`   | Optional          | The name of the author or entity (e.g., `"Eth2Ada Academy"`).                               |

The `descriptionETH` field is required to ensure every term addresses both blockchains, even if Ethereum has no direct equivalent (in which case `"---"` is used).

For examples of how to structure these objects, see the current entries in [data/news_data.js](https://github.com/TangentADA/eth2ada-rc/blob/main/data/news_data.js).

## Submission Well-Formedness Rules

- Submissions must consist of a single commit, based on the `main` branch of the [eth2ada-rc](https://github.com/TangentADA/eth2ada-rc) repository.
- Submissions must modify only the `data/news_data.js` file in the `data/` folder.
- Each PR should add or modify a single term object in the `single_news_data` array. Multiple terms require separate PRs.
- The `id` field must be unique and follow the format `"term_X"`, where `X` is a sequential number or unique identifier.
- The file must remain valid JavaScript (e.g., proper syntax, no trailing commas).

## Website

The dictionary is publicly accessible at [https://eth2ada.com/](https://eth2ada.com/), where terms are dynamically rendered from the `data/news_data.js` file. Contributions merged into the repository will reflect on the website after deployment.

## Step-by-Step Guide

Here’s how to contribute a new term or update an existing one:

1. **Fork the Repository**  
   - Visit [https://github.com/TangentADA/eth2ada-rc](https://github.com/TangentADA/eth2ada-rc).
   - Click the "Fork" button to create a copy of the repository under your GitHub account.

2. **Clone Your Fork**  
   - On your local machine, run:  
     ```
     git clone https://github.com/YOUR_USERNAME/eth2ada-rc.git
     ```
   - Navigate into the directory:  
     ```
     cd eth2ada-rc
     ```

3. **Create a New Branch**  
   - Create a branch for your changes:  
     ```
     git checkout -b add-term-X
     ```
     Replace `X` with a brief description (e.g., `add-term-utxo`).

4. **Edit the Dictionary File**  
   - Open `data/news_data.js` in a text editor.
   - For a new term: Append a new object to the `single_news_data` array, following the structure outlined above.
   - For an update: Modify the existing object with the matching `id`.
   - Example new term:
     ```javascript
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
     ```

5. **Commit Your Changes**  
   - Stage your changes:  
     ```
     git add data/news_data.js
     ```
   - Commit with a clear message:  
     ```
     git commit -m "Add new term: DApp"
     ```

6. **Push to Your Fork**  
   - Push your branch to your GitHub fork:  
     ```
     git push origin add-term-X
     ```

7. **Submit a Pull Request**  
   - Go to your fork on GitHub (e.g., `https://github.com/YOUR_USERNAME/eth2ada-rc`).
   - Click "Pull Requests" > "New Pull Request".
   - Select your branch (`add-term-X`) and target the `main` branch of the original repository.
   - Provide a title (e.g., "Add DApp term") and description, then submit.

8. **Review Process**  
   - Maintainers will check your submission for syntax validity and content accuracy.
   - Once approved, your term will be merged and appear on [https://eth2ada.com/](https://eth2ada.com/) after the next deployment.

## Notes

- Ensure your term explanations are clear, concise, and educational, catering to both Cardano and Ethereum audiences.
- Images referenced in `image` and `subImages` should be available in the repository’s `/images/blog/` directory or hosted externally if applicable.
- Contact the Eth2Ada team via GitHub issues if you need assistance or have questions about your submission.
