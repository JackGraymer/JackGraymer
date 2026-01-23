---
title: "AI CUSTOMS CLASSIFIER"
order: 20
company: "ON AG"
brandLogo: "../assets/on-running-logo.png"
description: "An AI tool built at ON AG to predict customs codes using structured and unstructured product data."
publishDate: 2024-12-01
category: "Data Science"
tags: ["Python", "Machine Learning", "NLP", "AI/ML", "Predictive Modeling", "BigQuery", "Vertex AI"]
thumbnail: "../assets/shipping.jpg"
banner: "../assets/hscodes_explain.jpg"
gallery:
  - "../assets/hscodes.png"
---

## Project Overview

This project was developed as a core initiative under the **BYDO** project, a collaboration between **ON AG** and **HSLU**. The objective was to automate the assignment of Harmonized System (HS) Codes for international imports and exports. By leveraging product descriptions and manufacturing specifications, the system identifies the precise regulatory codes required to ensure trade compliance and minimize manual overhead.

### The Problem

Classifying products for international trade is a notorious logistical bottleneck. While the first six digits of HS codes are standardized globally, individual countries apply unique suffixes, formatting rules, and local interpretations. For a global brand like **ON AG**, manual classification is slow and prone to human error. Traditional keyword searches often fail because regulatory language is highly specific and does not always align with commercial product descriptions. The goal was to build a pipeline that could ingest complex manufacturing data and output accurate, audit-ready, country-specific codes.

### Technical Approach

#### 1. Data Engineering & Standardization

The foundation of the project relied on the **Google Cloud Stack** to handle large-scale regulatory and product datasets.

* **Data Sourcing:** Raw product specifications and historical classification records were centralized in **BigQuery**.
* **Cleaning & Normalization:** Python-based scripts standardized product descriptions and material compositions.
* **Global Mapping:** A unified schema was developed to manage the variations in HS code formats across different jurisdictions, ensuring the model could generalize across various international markets.

#### 2. Model Benchmarking & Selection

Three distinct modeling approaches were evaluated to determine the best balance between precision and contextual understanding:

* **Gradient Boosted Decision Trees (GBDT):** Utilized as a baseline to process structured features from the manufacturing data.
* **Multi-Layer Perceptron (MLP):** A neural network approach designed to capture non-linear relationships within the feature set.
* **Google AI Gemini (via Vertex AI):** An LLM-based approach utilizing **Context Engineering**. This method allowed the model to process nuanced text descriptions and cross-reference them with regulatory definitions provided in the prompt context.

#### 3. Context Engineering & Retrieval

While traditional ML models performed well on structured data, **Gemini** demonstrated superior performance in interpreting complex product descriptions. Through **Vertex AI**, specific context, such as material composition, footwear components, and product intent, was engineered into the prompts. This allowed the model to reason through classification rules rather than simply performing pattern matching.

#### 4. Human-in-the-Loop Verification

To ensure compliance and build trust with trade specialists, the system was designed with a "source-first" philosophy. For every HS code suggested, the chatbot retrieves and displays the **top 3 most relevant sources** (such as specific regulatory clauses or historical classification precedents). This allows human experts to instantly verify the model’s logic and ensures the output is audit-ready.

#### 5. Prototyping

A functional prototype was built using **Streamlit** to bridge the gap between the data pipeline and the end-user.

* **Document Selection:** Users can choose relevant technical documents or manufacturing specs to guide the query.
* **Interactive Chatbot:** A conversational interface allows users to interrogate the classification, asking for clarification on specific rules or material-based distinctions.


### Project Phases

**Phase 1 – Data Gathering & Standardization** Consolidated global trade data into BigQuery. Addressed the challenge of differing code lengths and formats by creating a standardized preprocessing pipeline that aligns country-specific codes to a core product identity.

**Phase 2 – Model Development & Evaluation** Developed and trained GBDT and MLP models to establish a performance baseline. Simultaneously, established a testing framework for LLM prompts using Vertex AI to compare traditional ML performance against generative AI capabilities.

**Phase 3 – Context Engineering & Tooling** Refined the Gemini implementation by providing high-quality reference data. Developed the Streamlit interface to transition the project from a backend model to a functional internal tool capable of citing its sources.


### Results

* **Higher Accuracy on Complex Items:** The Gemini-based approach, supported by context engineering, significantly outperformed traditional models on products with ambiguous material compositions.
* **Audit-Ready Transparency:** By providing the top 3 relevant sources for every answer, the system eliminated the "black box" nature of AI, allowing for rapid human verification.
* **Enterprise Scalability:** Utilizing the Google Cloud ecosystem (BigQuery and Vertex AI) ensures the pipeline can handle the increasing volume of **ON AG**'s global product catalog while maintaining low latency.

