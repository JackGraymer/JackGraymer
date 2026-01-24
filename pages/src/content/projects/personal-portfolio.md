---
title: "CUSTOMER FINANCIAL BEHAVIOR & CHURN ANALYTICS"
order: 27
company: "YAPPEAL & HSLU"
brandLogo: "../assets/yappeal-logo.webp"
description: "An end-to-end data analytics pipeline to segment financial behavior and predict customer churn using multi-year card transaction datasets."
publishDate: 2025-01-15
category: "Data Science / Financial Analytics"
tags: ["Python", "Tableau", "K-Modes", "PCA", "Scikit-Learn", "Feature Engineering"]
thumbnail: "../assets/yapealthumb.webp"
banner: "../assets/yapealthumb.webp"
gallery:
  - "../assets/yapeal1.png"
  - "../assets/yapeal2.png"
  - "../assets/yapeal3.png"
---

## Project Overview
This project was developed as part of the **Customer Data Analytics** module at **HSLU** in collaboration with the FinTech platform **YAPPEAL**. The objective was to transform raw card transaction data (2021–2023) into actionable business intelligence by identifying customer segments and quantifying churn risks through statistical modeling and interactive visualization.

### The Problem
Financial institutions possess vast amounts of transactional data, yet extracting meaningful behavioral insights is challenged by high dimensionality and a mix of categorical (Merchant Codes, Countries) and numerical (Amount CHF) features. The goal was to build a system that identifies high-value segments and detects "silent churners"—customers whose spending activity is significantly declining over time.

### Technical Approach

#### 1. Data Engineering & Enrichment
- **Multi-Source ETL:** Merged transaction records from 2021, 2022, and 2023 while handling missing MCC (Merchant Category Code) metadata.
- **Contextual Enrichment:** Integrated Swiss public and "other" holidays (e.g., Black Friday, Valentine's Day) to evaluate seasonal spending spikes.
- **Categorical Mapping:** Developed custom hierarchy logic to map 500+ unique MCCs into 15 macro-categories and specific subcategories like "Airlines" and "Public Transport."

#### 2. Advanced Preprocessing
- **Outlier Detection:** Applied log-transformation to `amount_chf` to handle the heavy-tailed distribution of transaction values, using IQR-based bounds to isolate significant outliers.
- **Time-Series Extraction:** Derived `trx_timing` (Morning, Afternoon, Evening, Night) and `weekday` features to build temporal spending profiles.

#### 3. Behavioral Clustering
- **K-Modes Implementation:** Used the K-Modes algorithm to cluster categorical features (Airlines, Continents, Weekdays) without losing information to dummy-variable sparsity.
- **Dimensionality Reduction:** Utilized PCA (Principal Component Analysis) and t-SNE to project high-dimensional clusters into 3D space for evaluation.
- **Segment Discovery:** Identified distinct personas, such as "European Budget Travelers" (high Ryanair/EasyJet frequency) and "Local Grocery Shoppers."

#### 4. Churn Prediction & Retention Analysis
- **Retention Slope:** Calculated a quarterly "Slope" (linear regression coefficients) for every customer by tracking transaction frequency from 2021-Q1 to 2023-Q3.
- **Risk Assessment:** Customers with negative slopes above a specific threshold were flagged as "at-risk," enabling targeted loyalty interventions.

#### 5. Tableau Visualization
- Built integrated Tableau dashboards featuring:
  - **Geographic Heatmaps:** Spending density by ISO country codes.
  - **Churn Storyboards:** Interactive views of retention trends across different customer clusters.
  - **Ratio Analytics:** Visualizing User-to-Transaction ratios to differentiate between high-frequency and high-value users.

### Project Phases

**Phase 1 – Data Foundation & Preprocessing**  
established a clean dataset with unified currency (CHF) and enriched holiday metadata.

**Phase 2 – Feature Engineering & Profiling**  
Mapped counterparts to specific airlines/continents and introduced temporal features for deeper behavioral context.

**Phase 3 – Unsupervised Machine Learning**  
Executed K-Modes and K-Means experiments to segment the audience, optimized using Silhouette scores and Inertia plots.

**Phase 4 – Dashboarding & Strategy**  
Translated statistical clusters into Tableau visualizations to provide business-ready insights into customer churn and market potential.

### Results
- Successfully segmented a customer base of thousands into 4 actionable behavioral clusters.
- Identified the "Slope" metric as a reliable early-warning indicator for customer churn, highlighting significant findings for 2023-Q3 period.
- Delivered a comprehensive Tableau workbook providing stakeholders with deep-drills into category-specific spending behavior and geographic trends.