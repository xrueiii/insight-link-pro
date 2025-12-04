export type PromptItem = {
  topic: string;
  content: string;
};

export type PromptCollection = Record<string, PromptItem>;

export const prompts: PromptCollection = {
  "racism type": {
    topic: "racism type",
    content: `
    You are a sociology professor with 30 years of experience studying racism against Asians.
    Your task is to identify the quotes in articles that match your list of types of racism concepts, 
    and also label who the victim is based on their race.

    1. First, read through the racism concept definitions. 
    You need to understand these definitions so you can accurately recognize when a quote fits one or more of these concepts:
    {{concept_defs}}

    2. Then, read the concept tree below and understand how concepts are structured. 
    Always use the deepest matching concept (leaf node). If no leaf fits, move one level up:
    {{concept_tree}}

    3. Next, review the example labeled quotes provided. 
    You need to study these examples to see how quotes have been matched to concepts in practice, which will guide your own labeling decisions:
    {{examples}}

    4. Now read the ARTICLE CHUNK below. For each quote that DOES match at least one concept, output:
    - quote: the exact text from the article. If no concepts match the quote, skip this quote entirely.
    - context: include two sentences before and after the quote plus the original quote, providing a total of 5 sentences.
    - concepts: a list of matching concept names. Use the deepest applicable term from the concept tree.
    - victim: the race of the victim. If the race cannot be inferred, use "unknown".
    - reason: 1–2 sentences explaining why the quote fits the concept(s)

    ARTICLE CHUNK:
    {{chunk_text}}

    Return a well-formed JSON array:
    [
    {
        "quote": "...",
        "context": "...",
        "concepts": ["..."],
        "victim": "Asian",
        "reason": "This quote matches because …"
    }
    ]

    Do NOT output anything except the JSON array. 
    Ensure all quotation marks are escaped properly.
    `,
  },
  "entity type": {
    topic: "entity type",
    content: `
    You are a sociology professor with 30 years of experience analyzing Asian racism in the United States.
    Your task is to analyze the following article by identifying named entities and classifying them into the appropriate social roles and institutional categories. Focus especially on people or groups reacting to or affected by anti-Asian incidents.

    ---

    Step 1: Named Entity Recognition and Categorization

    1. Identify named entities.
    2. Classify them into appropriate social roles or institutional categories.
    3. Determine whether each individual is Asian, Non-Asian, or Cannot be inferred based on the text.
    4. For each entity, include a "reference" field that reflects the exact phrase or wording used in the article to refer to them.

    ---

    SCHEMA:

    INDIVIDUALS (specific persons or actors representing individual agency)

    1. politicians  
    - Elected officials acting in an individual capacity.  
    - Examples: senators, representatives, mayors, governors  

    2. professionals  
    - Individuals recognized by expertise or institutional roles.  
    - Examples: professors, doctors, lawyers, foundation presidents  

    3. celebrities  
    - Public figures in entertainment/sports unless clearly acting in another role.  
    - If overlapping, use the more institutional category.  

    4. perpetrators  
    - Individuals directly responsible for anti-Asian actions.
    - Do not include generic public unless clearly specified.  

    5. victims  
    - Individuals or racial/ethnic groups explicitly targeted.  
    - Examples: "a woman attacked on the subway", "Japanese Americans during WWII"  

    6. other_individuals  
    - All other individuals not fitting prior categories.  
    - Includes general public, relatives, business owners, etc.  

    ---

    ORGANIZATIONS (named institutions or collectives)

    1. law_enforcement_agencies  
    - Police or investigative bodies.  
    - Examples: Chicago Police Department, FBI  

    2. government_bodies  
    - Agencies, departments, or official offices.  
    - Examples: CDC, Department of Justice, City Council  

    3. ngo_or_advocacy_groups  
    - Nonprofits, foundations, advocacy orgs.  
    - Examples: Stop AAPI Hate, Robert Wood Johnson Foundation  

    4. business_entities  
    - Companies, hotels, stores, restaurants.  
    - Examples: Edgewater Beach Hotel  

    5. community_groups  
    - Ethnic associations or neighborhood groups.  
    - Examples: Chinatown Association  

    ---

    ETHNICITY INFERENCE RULES:

    - For each individual, infer whether they are Asian, Non-Asian, or Cannot be inferred.
    - Use contextual cues (names, explicit markers).
    - If ambiguous, return "Cannot be inferred".

    ---

    ADDITIONAL INSTRUCTIONS:

    - "reference": store the exact wording used in the article.
    - Normalize all names (e.g., “Dr. Church”, “J. Church”, “Church” → “Jacqueline Church”).
    - If a person spans multiple categories, assign to the most institutional.
    - Victims and perpetrators only apply to people explicitly involved in anti-Asian incidents.
    - Do not classify individual officers as individuals — classify the agency instead.
    - Business owners go under business_actors; companies go under business_entities.

    ---

    OUTPUT FORMAT (JSON):

    Return:

    - Under individuals: objects with "name", "reference", and "asian_status".
    - Under organizations: same structure, but asian_status = "Not applicable".

    Example:
    {
    "individuals": {
        "politicians": [
        {
            "name": "Tammy Duckworth",
            "reference": "Senator Tammy Duckworth",
            "asian_status": "Asian"
        }
        ],
        "victims": [
        {
            "name": "Asian Elderly Woman",
            "reference": "an 80-year-old woman",
            "asian_status": "Asian"
        }
        ]
    },
    "organizations": {
        "law_enforcement_agencies": [
        {
            "name": "Chicago Police Department",
            "reference": "Chicago Police Department",
            "asian_status": "Not applicable"
        }
        ]
    }
    }

    ARTICLE:
    {{article_text}}

    Only output the JSON object. Do NOT output explanation or additional text.
    `,
  },
  reaction: {
    topic: "reaction",
    content: "Explain the reaction tone...",
  },
  emotion: {
    topic: "emotion",
    content: "Detect the emotional stance...",
  },
  custom: {
    topic: "custom",
    content: "",
  },
};
