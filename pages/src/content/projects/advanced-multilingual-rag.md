---
title: "ADVANCED MULTILINGUAL RAG SYSTEM"
order: 10
company: "ETH Zurich & Google DeepMind"
brandLogo: "../../assets/brands/eth-google-logo.png"
description: "A high-performance end-to-end RAG system built to extract and synthesize information from multilingual news datasets, featuring hybrid retrieval and GraphRAG."
publishDate: 2024-11-20
category: "GenAI / NLP"
tags: ["Python", "GenAI", "RAG", "GraphRAG", "Vector Search", "GPT-4o"]
thumbnail: "../assets/rag_2.jpg"
banner: "../assets/rag_banner.png"
gallery:
  - "../assets/rag_1.jpg"
  - "../assets/rag_2.jpg"
githubUrl: "https://github.com/JackGraymer/Advanced-GenAI"
---

## Project Overview
This project was developed as a collaborative research initiative involving **ETH Zurich**, **HSLU**, and **Google DeepMind**. The goal was to build a robust Retrieval-Augmented Generation (RAG) system capable of handling complex, multilingual queries on news datasets.

### The Problem
Traditional keyword search often fails to capture the semantic nuance of multilingual news, while simple vector search can lack the specific entity relationships found in complex stories.

### Technical Approach

#### 1. Data Engineering & Chunking
The pipeline began with parsing raw HTML news articles into structured content. We implemented semantic chunking to ensure that context was preserved across boundaries, and used **GPT-4o** to generate a "Gold Standard" evaluation set of query-relevance pairs.

#### 2. Hybrid Retrieval Strategy
To ensure maximum recall and precision, we combined three distinct methods:
*   **BM25:** For traditional keyword matching.
*   **Sentence-BERT:** For dense semantic vector search.
*   **Microsoft GraphRAG:** For knowledge-graph-based entity retrieval.

#### 3. Refinement & Synthesis
Retrieved documents were processed through a **re-ranking** model to filter out noise. The final response was synthesized using an LLM aggregation strategy that cited sources and resolved contradictions across multilingual articles.

### Project Development Phases

**Phase 1: Multilingual Data Engineering & Semantic Structuring**
This stage focused on transforming raw, unstructured HTML news articles into a high-quality, retrieval-ready dataset. We utilized a hybrid parsing approach (BeautifulSoup and Docling) combined with specialized cleaning for German text (handling umlauts and compound words). Data was segmented using both Recursive Character and Semantic Chunking to maintain contextual integrity. Finally, a "Gold Standard" evaluation set was constructed using GPT-4o to assign precise relevance labels to document-query pairs.

**Phase 2: Hybrid Retrieval & Research Agent Implementation**
A sophisticated retrieval engine was designed to navigate complex news archives through multiple search paradigms. We implemented and compared three core methodologies: lexical matching (BM25), dense vector search (Bi-encoders), and Knowledge-Graph RAG (Microsoft GraphRAG) to map relationships between news entities. The system also integrated intelligent pre-retrieval logic, including query expansion and rewriting, to optimize search intent.

**Phase 3: Post-Retrieval Refinement & Response Synthesis**
To ensure high-fidelity answers, we focused on refining retrieved information through advanced re-ranking models (such as EcoRank and Set-Encoder). This solved the "lost in the middle" problem by ensuring the most relevant context appeared first. Final response generation used targeted LLM Prompt Engineering for multilingual synthesis, strictly adhering to the retrieved sources while maintaining cross-language consistency and resolving contradictions.

**Phase 4: Comprehensive Evaluation & Performance Analysis**
The final stage involved a multi-layered assessment of accuracy and reliability. Performance was quantified using NLP metrics like Semantic F1 Score (for meaning-based comparison) alongside BLEU and ROUGE. This was complemented by a qualitative framework assessing relevance, correctness, and clarity on a 1-5 scale. Results were visualized through statistical analysis to compare the effectiveness of configurations like standalone Vector search vs. Hybrid GraphRAG.

### Results
The hybrid approach demonstrated a significant performance gain over standalone methods. By combining GraphRAG with Vector Search, the system achieved a much higher "fact-retrieval" rate for complex investigative news queries.
