---
title: "ADVANCED MULTILINGUAL RAG SYSTEM"
order: 10
company: "ETH Zurich & Google DeepMind"
brandLogo: "../assets/google-logo.png"
description: "A high-performance end-to-end RAG system built to extract and synthesize information from multilingual news datasets, featuring hybrid retrieval and GraphRAG."
publishDate: 2024-11-20
category: "GenAI / NLP"
tags: ["Python", "GenAI", "RAG", "NLP", "GraphRAG", "Vector Search", "GPT-4o"]
thumbnail: "..\assets\rag_banner.png"
banner: "../assets/Evaluation_Workflow.svg"
gallery:
  - "../assets/DeepMind_Logo.png"
  - "../assets/rag-graph.png"
  - "../assets/rag-table.png"
githubUrl: "https://github.com/JackGraymer/Advanced-GenAI"
---

## Project Overview
This project was developed as a collaborative research initiative involving **ETH Zurich**, **HSLU**, and **Google DeepMind**. The goal was to design an end-to-end Retrieval-Augmented Generation (RAG) assistant that answers complex, multilingual questions about ETH’s news archive while citing primary sources.

### The Problem
News archives feature long-form multilingual (German and English) articles where strictly lexical search underperforms: keyword-only queries miss paraphrased facts, while naïve dense retrieval over-indexes semantically similar but contextually irrelevant passages. We needed a pipeline that (1) understands nuanced questions, (2) surfaces the exact supporting snippets, and (3) synthesizes grounded, audit-ready answers.

### Technical Approach

#### 1. Data Engineering & Chunking
- Parsed ETH news HTML into structured records, preserving language metadata and publication dates.
- Applied hybrid chunking (Recursive Character + semantic boundaries) to keep discourse units intact.
- Built a “gold set” of 25 benchmark questions with GPT-4o-generated relevance annotations to drive evaluation later.

#### 2. Hybrid Retrieval & Research Agents
- Dense backbone: multilingual `distiluse-base-multilingual-cased-v1` embeddings indexed in FAISS.
- HyDE expansion: GPT-4o generates three hypothetical documents per query; their averaged embeddings boost recall on under-specified questions.
- Combined standard dense scores and HyDE scores via weighted normalization to produce a 100-candidate pool per query.

#### 3. Post-Retrieval Refinement & Fusion
We benchmarked seven rerankers, each optimized for a different trade-off:
1. **EcoRank** (MiniLM→Electra cascade) for budget-aware precision.
2. **FlagReranker v2-m3** (FP16) for multilingual robustness.
3. **Rankify-style BGE reranker** implemented directly with Hugging Face for controllable batching.
4. **Cohere Rerank v3.5** offloads heavy lifting to an API, providing consistent latency on weaker GPUs.
5. **Qwen3-Reranker-4B** for LLM-grade judgments where latency is secondary.
6. **Multislot diversity reranker** (MMR-style) to avoid redundant chunks.
7. **Reciprocal Rank Fusion (RRF)** across the strongest trio (EcoRank, Flag, Cohere) with async execution—the fused list consistently achieved the highest Precision@10 with latency limited by the slowest component.

#### 4. Guided Response Synthesis
- Retrieved contexts are serialized to JSON (chunk text, source ID, publication date) and fed to GPT-4o with a system policy enforcing neutrality, concision, and JSON-only answers.
- Model outputs both the final answer and the chunk IDs it relied on, ensuring transparent traceability.

#### 5. Comprehensive Evaluation
- **Automated metrics:** semantic Exact Match (MiniLM embeddings), semantic F1 (token-level cosine matching), BLEU, ROUGE-1/2/L.
- **Human review:** 1–5 ratings for relevance, correctness, clarity across all 25 questions.
- **Findings:** Fusion reranking lifted Precision@10 to the mid-0.7 range while EcoRank delivered the best MRR at a fraction of the latency. Human evaluators gave average scores of 4.4 (relevance), 3.7 (correctness), 4.9 (clarity); correctness dips aligned with questions whose retrieval pool lacked high-scoring ground-truth chunks.

### Project Phases

**Phase 1 – Multilingual Data Engineering**  
Established the benchmark dataset, chunk repository, and relevance annotations to ensure repeatable experimentation.

**Phase 2 – Hybrid Retrieval & Research Agents**  
Implemented dense+HyDE retrieval with on-the-fly query rewriting; stored 100-candidate pools per query for deterministic downstream testing.

**Phase 3 – Post-Retrieval Refinement & Response Synthesis**  
Evaluated multiple rerankers, introduced asynchronous RRF fusion, and handed the top-10 ranked chunks to GPT-4o with strict JSON prompts for grounded answer generation.

**Phase 4 – Evaluation & Insight Extraction**  
Compared machine metrics to human ratings, visualized metric heatmaps per question, and correlated failure cases back to retrieval coverage to guide future data augmentation.

### Results
- Fusion of EcoRank + FlagReranker + Cohere improved factual hit rate on challenging “who/when” questions versus any single reranker.
- Automated semantic F1 scores mirrored human correctness ratings except for intentionally open-ended queries, highlighting where quantitative metrics under-credit acceptable paraphrases.
- The pipeline answered 20 of 25 benchmark questions correctly (per human judgment) and gracefully declined when evidence was missing, producing source-linked, portfolio-ready responses.