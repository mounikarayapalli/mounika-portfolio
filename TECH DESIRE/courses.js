const COURSES_DATABASE = {
    c: {
        name: "C Language",
        badge: "C Captain",
        icon: "⚓",
        img: "c.jpg",
        desc: "Learn memory structures, pointers, operations, structures, and low-level development in standard ANSI C.",
        chapters: [
            {
                title: "Intro to C Programming",
                content: "C is a procedural programming language designed in 1972 by Dennis Ritchie at Bell Labs. It provides low-level memory control while maintaining a portable structure. Basic syntax requires a main() function which returns an integer to the shell upon termination. Every statement concludes with a semicolon.",
                video: "KJgsSFOSQv0",
                quiz: [
                    { q: "Who is the designer of C language?", o: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling"], a: 1 },
                    { q: "What finishes statements in C programming?", o: ["Semicolon (;)", "Period (.)", "Colon (:)"], a: 0 }
                ]
            },
            {
                title: "Types, Operations & Variables",
                content: "Variables are named spots in memory. Types specify size and classification: int (usually 4 bytes), char (1 byte), float, and double. Standard operators are arithmetic (+, -, *, /) and relational (==, !=, >, <). Variables are strict and require dynamic declaration.",
                video: "yE8eNObRzsw",
                quiz: [
                    { q: "How many bytes does a standard char type occupy?", o: ["1 byte", "2 bytes", "4 bytes"], a: 0 },
                    { q: "Which operator is relational?", o: ["+", "&&", "=="], a: 2 }
                ]
            },
            {
                title: "Conditionals, Branches & Loops",
                content: "Control structure flow with conditional logic: if, else if, else, or switch. Loops repeat chunks of lines until termination parameters are met. The for, while, and do-while loops handle repetition structure.",
                video: "e1GZ7xJpXU4",
                quiz: [
                    { q: "Which conditional selects among multiple numeric/char cases?", o: ["if", "switch-case", "for"], a: 1 },
                    { q: "Which loop always executes its block at least once?", o: ["do-while", "while", "for"], a: 0 }
                ]
            },
            {
                title: "Functional Programming & Scope",
                content: "Modularize code via custom functions. A function specifies argument structures, returns values, and variables declared within are scope-limited to that local call boundary. Global values exist throughout the entire source execution lifespan.",
                video: "V9H_sB8Y1g4",
                quiz: [
                    { q: "What keyword specifies a function does not return any value?", o: ["void", "null", "int"], a: 0 },
                    { q: "Are variables declared inside a function accessible globally?", o: ["Yes", "No", "Only if static"], a: 1 }
                ]
            },
            {
                title: "Pointers & Dynamic Storage Allocation",
                content: "Pointers store RAM memory coordinates rather than direct variables. Declared using asterisk symbols (*). Allocate heap memory manually using malloc() or calloc() from the standard library, and release it dynamically using free() to prevent leaks.",
                video: "zuegQmMd8Dw",
                quiz: [
                    { q: "What operator symbol extracts the address of a variable?", o: ["*", "&", "->"], a: 1 },
                    { q: "Which function releases allocated memory in C?", o: ["malloc()", "release()", "free()"], a: 2 }
                ]
            }
        ],
        path: [
            { milestone: "Getting Started", desc: "Setting up GCC compiler, creating basic hello world files." },
            { milestone: "Operations Flow", desc: "Writing loops, parsing conditional branches." },
            { milestone: "Data Collections", desc: "Building static arrays and custom structural mappings." },
            { milestone: "Pointer Wizardry", desc: "Direct hardware addressing and memory allocation blocks." }
        ]
    },
    cpp: {
        name: "C++ Programming",
        badge: "Object Master",
        icon: "🔮",
        img: "cpp.jpg",
        desc: "Study Object-Oriented C++, namespaces, structures, polymorphic inheritance, and the Standard Template Library (STL).",
        chapters: [
            {
                title: "Introduction to OOP & C++",
                content: "C++ was designed by Bjarne Stroustrup as an extension of C. It introduces Object-Oriented features like classes, encapsulation, data hiding, and inheritance. We compile using standard g++ compilers.",
                video: "vLnPwxZdW4Y",
                quiz: [
                    { q: "Who created C++?", o: ["Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], a: 2 },
                    { q: "What major concept does C++ add to C?", o: ["Garbage collection", "Object-Oriented Programming", "Dynamic typing"], a: 1 }
                ]
            },
            {
                title: "Classes & Access Specifiers",
                content: "Classes wrap variables (attributes) and functions (methods) together. We structure encapsulation boundary control with access keywords: public (visible everywhere), private (visible only in class), and protected (visible in class and subclasses).",
                video: "i_wDa2AS_84",
                quiz: [
                    { q: "Which access specifier limits visibility strictly to the current class?", o: ["public", "protected", "private"], a: 2 },
                    { q: "A class acts as a blueprint for creating:", o: ["Functions", "Objects", "Namespaces"], a: 1 }
                ]
            },
            {
                title: "Constructor Mechanics & Inheritance",
                content: "Constructors initialize objects upon instantiation. Inheritance allows a child class to gain attributes/methods of a parent class using colon notation. C++ supports multiple inheritance chains.",
                video: "Y5Uamx6H-ug",
                quiz: [
                    { q: "Does C++ support multiple inheritance?", o: ["Yes", "No", "Only for abstract interfaces"], a: 0 },
                    { q: "What function runs automatically when an object is instantiated?", o: ["Main", "Destructor", "Constructor"], a: 2 }
                ]
            },
            {
                title: "Polymorphism & Method Overriding",
                content: "Polymorphism means 'many forms'. Compile-time polymorphism includes function overloading. Runtime polymorphism uses virtual functions, allowing overridden functions in derived classes to execute via parent pointers.",
                video: "U86nO6L_wzU",
                quiz: [
                    { q: "What keyword specifies dynamic late-binding functions in C++?", o: ["virtual", "dynamic", "polymorph"], a: 0 },
                    { q: "What is defining two functions with same name but different parameters?", o: ["Overriding", "Overloading", "Inheriting"], a: 1 }
                ]
            },
            {
                title: "STL Containers & Templates",
                content: "Templates allow generic programming. The Standard Template Library (STL) provides pre-built structures like vectors, maps, stacks, queues, and standard algorithms to sort or query objects.",
                video: "Z1Y6KntMv2U",
                quiz: [
                    { q: "Which template in STL represents a dynamic continuous array?", o: ["list", "vector", "map"], a: 1 },
                    { q: "What features enable generic functions that work with multiple datatypes?", o: ["Templates", "Inheritance", "Pointers"], a: 0 }
                ]
            }
        ],
        path: [
            { milestone: "Namespace & Streams", desc: "Using iostream for basic terminal intake/output." },
            { milestone: "Class Declarations", desc: "Structuring parameters, methods, and access control." },
            { milestone: "Inheritance Trees", desc: "Setting up base and child class relationships." },
            { milestone: "STL Mastery", desc: "Leveraging queues, hash maps, and sorting algorithms." }
        ]
    },
    java: {
        name: "Java Programming",
        badge: "Coffee Brewer",
        icon: "☕",
        img: "java.jpg",
        desc: "Dive into write-once-run-anywhere Java, JVM mechanics, exception handling, interfaces, and collections.",
        chapters: [
            {
                title: "Java & JVM Platform Details",
                content: "Java is a class-based, object-oriented language developed by James Gosling in 1995. Its code is compiled to Bytecode, which runs on the Java Virtual Machine (JVM), enabling platform independence.",
                video: "A74TOX803D0",
                quiz: [
                    { q: "What executes bytecode on different operating systems?", o: ["JDK", "JVM", "JRE"], a: 1 },
                    { q: "Who developed Java in 1995?", o: ["Guido van Rossum", "Dennis Ritchie", "James Gosling"], a: 2 }
                ]
            },
            {
                title: "Inheritance & Interface Contracts",
                content: "Java does not support multiple class inheritance to avoid the 'Diamond Problem'. Instead, it uses single inheritance (extends) and interface contracts (implements), which define headers that implementing classes must specify.",
                video: "yGbqUlg1FpE",
                quiz: [
                    { q: "Which keyword establishes a class inheritance relation?", o: ["implements", "extends", "inherits"], a: 1 },
                    { q: "Can a Java class implement multiple interfaces?", o: ["Yes", "No", "Only if it is abstract"], a: 0 }
                ]
            },
            {
                title: "Garbage Collector & References",
                content: "Unlike C/C++, Java handles memory management automatically. The Garbage Collector (GC) runs in the background, identifying unused objects and releasing JVM heap memory allocations without developer intervention.",
                video: "p4G9VpZ54OQ",
                quiz: [
                    { q: "What JVM sub-system manages automatic heap memory cleanup?", o: ["Classloader", "Compiler", "Garbage Collector"], a: 2 },
                    { q: "Where are objects instantiated in Java?", o: ["Stack memory", "Heap memory", "Disk storage"], a: 1 }
                ]
            },
            {
                title: "Exceptions & Try-Catch Blocks",
                content: "Java enforces robust error handling using Exceptions. Errors are categorized as Checked (checked at compile time) or Unchecked (checked at runtime). Use try-catch-finally blocks to process errors smoothly.",
                video: "1XAJy3A-Kao",
                quiz: [
                    { q: "Which block always executes after exception checks?", o: ["catch", "finally", "try"], a: 1 },
                    { q: "NullPointerException is what type of exception?", o: ["Checked", "Unchecked", "System Error"], a: 1 }
                ]
            },
            {
                title: "Java Collections Framework",
                content: "The Collections framework provides data structures. Core interfaces include List (ordered collection like ArrayList), Set (unique elements like HashSet), and Map (key-value pairs like HashMap).",
                video: "hKtDqFj4H2U",
                quiz: [
                    { q: "Which interface guarantees element uniqueness?", o: ["List", "Set", "Map"], a: 1 },
                    { q: "Which class provides a resizable array implementation?", o: ["LinkedList", "ArrayList", "Vector"], a: 1 }
                ]
            }
        ],
        path: [
            { milestone: "JVM Setup", desc: "Setting up JDK, setting environmental paths, running javac." },
            { milestone: "Classes and Interfaces", desc: "Writing interfaces, abstract schemas, and object hierarchies." },
            { milestone: "Exceptions Control", desc: "Catching runtime anomalies and compiling checks." },
            { milestone: "Collections API", desc: "Writing maps, list stacks, and array sets." }
        ]
    },
    python: {
        name: "Python Programming",
        badge: "Snake Charmer",
        icon: "🐍",
        img: "python.jpg",
        desc: "Learn Python basic syntax, indentation, dictionaries, tuples, libraries, file I/O, and data processing packages.",
        chapters: [
            {
                title: "Python Philosophy & Setup",
                content: "Python is a high-level, interpreted programming language created by Guido van Rossum. It focuses on readability, relying on indentation rather than brackets to structure blocks of code.",
                video: "_uQrJ0TkZlc",
                quiz: [
                    { q: "Who created Python?", o: ["Guido van Rossum", "Guido Ritchie", "James Gosling"], a: 0 },
                    { q: "How are code blocks bounded in Python?", o: ["Curly brackets", "Indentation", "Semicolons"], a: 1 }
                ]
            },
            {
                title: "Core Data Types: Lists, Tuples, Dicts",
                content: "Python has versatile collection types. Lists are mutable ordered sequences. Tuples are immutable ordered sequences. Dictionaries store unordered key-value pairs.",
                video: "9O0z7-6tVvA",
                quiz: [
                    { q: "Which of the following is immutable?", o: ["List", "Dictionary", "Tuple"], a: 2 },
                    { q: "What maps key-value associations in Python?", o: ["List", "Dictionary", "Set"], a: 1 }
                ]
            },
            {
                title: "Functions, Parameters & Lambdas",
                content: "Define functions using the 'def' keyword. Python supports positional, keyword, and default parameters. Lambdas are small, anonymous single-expression functions.",
                video: "cQ6nC-85kSM",
                quiz: [
                    { q: "Which keyword defines a function?", o: ["def", "function", "lambda"], a: 0 },
                    { q: "What is a lambda in Python?", o: ["A class method", "An anonymous function", "A standard module"], a: 1 }
                ]
            },
            {
                title: "Modules, Imports & File I/O",
                content: "Extend Python by importing modules from the standard library or third-party packages (via pip). Read and write file streams using the 'with open()' statement block.",
                video: "XI5FrPV58tY",
                quiz: [
                    { q: "What tool manages third-party Python packages?", o: ["pip", "npm", "gcc"], a: 0 },
                    { q: "Which block ensures open files close automatically?", o: ["with open()", "try open()", "file.open()"], a: 0 }
                ]
            },
            {
                title: "Error Handling & Iterators",
                content: "Python uses 'try-except' blocks to handle exceptions. Loops use Iterables (objects you can get an iterator from) to process collections elements step-by-step.",
                video: "H1apLgR_LhU",
                quiz: [
                    { q: "Which keyword marks exception handling blocks?", o: ["except", "catch", "error"], a: 0 },
                    { q: "What is an object that generates a step-by-step element list?", o: ["Function", "Iterator", "Namespace"], a: 1 }
                ]
            }
        ],
        path: [
            { milestone: "Variables & Indentation", desc: "Setting up Python, writing scripts without semicolons." },
            { milestone: "Data Collection Manipulation", desc: "Indexing lists, appending, slicing, and matching keys." },
            { milestone: "Functional Logic", desc: "Creating functions, args, kwargs, and lambda mapping." },
            { milestone: "Data Handling Streams", desc: "Writing CSV/TXT streams with error safety boundaries." }
        ]
    },
    sql: {
        name: "SQL Database Querying",
        badge: "Query Wizard",
        icon: "🧙‍♂️",
        img: "sql.jpg",
        desc: "Study Relational Query Language syntax, SELECT expressions, filter operators, JOIN operations, and subqueries.",
        chapters: [
            {
                title: "Introduction to SQL & Databases",
                content: "SQL (Structured Query Language) is the standard language for dealing with Relational Databases. We use DDL (Data Definition Language) to define schemas and DML (Data Manipulation Language) to query and modify records.",
                video: "HXV3zeQKqGY",
                quiz: [
                    { q: "What category does SELECT belong to?", o: ["DDL", "DML", "DCL"], a: 1 },
                    { q: "What does SQL stand for?", o: ["Structured Query Language", "Sequential Query List", "Simple Query Logic"], a: 0 }
                ]
            },
            {
                title: "SELECT Statements & Filtering",
                content: "Query data from tables using: SELECT columns FROM table WHERE conditions. Use filters like AND, OR, IN, BETWEEN, and LIKE for text patterns.",
                video: "nco-T1H_pbg",
                quiz: [
                    { q: "Which clause filters rows retrieved by SELECT?", o: ["FROM", "GROUP BY", "WHERE"], a: 2 },
                    { q: "Which operator matches wildcard text patterns?", o: ["LIKE", "BETWEEN", "IN"], a: 0 }
                ]
            },
            {
                title: "JOIN Operations (Inner, Left, Right)",
                content: "Combine data from multiple tables using JOIN operations based on matching foreign keys. INNER JOIN retrieves matching rows; LEFT/RIGHT JOIN retrieves unmatched rows from the respective tables as well.",
                video: "9yeOJ01FfV8",
                quiz: [
                    { q: "Which JOIN yields only rows that match in both tables?", o: ["LEFT JOIN", "INNER JOIN", "FULL JOIN"], a: 1 },
                    { q: "Does LEFT JOIN return unmatched rows from the left table?", o: ["Yes", "No", "Only if specified"], a: 0 }
                ]
            },
            {
                title: "Group Queries & Aggregations",
                content: "Compute aggregate statistics using functions like COUNT(), SUM(), AVG(), MIN(), and MAX(). Use the GROUP BY clause to group records, and HAVING to filter grouped results.",
                video: "z4P6L_c31fM",
                quiz: [
                    { q: "Which aggregate calculates average column values?", o: ["SUM", "AVG", "COUNT"], a: 1 },
                    { q: "What clause filters records AFTER aggregation grouping?", o: ["WHERE", "HAVING", "LIMIT"], a: 1 }
                ]
            },
            {
                title: "Subqueries & Index Optimization",
                content: "Subqueries are queries nested inside other SQL queries. Indexing tables on key columns accelerates query execution but increases write latency.",
                video: "0L1pPZp9U6w",
                quiz: [
                    { q: "What is a query written inside another query called?", o: ["Subquery", "Join", "View"], a: 0 },
                    { q: "What is a downside of indexing database tables?", o: ["Slower SELECT operations", "Increased read times", "Slower INSERT/UPDATE operations"], a: 2 }
                ]
            }
        ],
        path: [
            { milestone: "Tables & Columns Setup", desc: "Setting up database tables and data types." },
            { milestone: "Conditional Querying", desc: "Filtering records with logical checks." },
            { milestone: "Data Junctions", desc: "Combining datasets using INNER and LEFT JOINs." },
            { milestone: "Aggregate Dashboards", desc: "Grouping metrics and filtering aggregate columns." }
        ]
    },
    os: {
        name: "Operating Systems (OS)",
        badge: "Kernel Commander",
        icon: "💻",
        img: "svg-placeholder",
        desc: "Learn core OS architecture: kernel space, thread processes, scheduling algorithms, paging, and deadlocks.",
        chapters: [
            {
                title: "OS Architecture & Kernels",
                content: "An Operating System manages computer hardware resources and provides services for execution programs. The Kernel is the core component, managing process lifecycles and physical memory allocations.",
                video: "vBURTt97EkA",
                quiz: [
                    { q: "What is the core of an Operating System?", o: ["Shell", "Compiler", "Kernel"], a: 2 },
                    { q: "What mode executes core OS actions with full privileges?", o: ["User Mode", "Kernel Mode", "Program Mode"], a: 1 }
                ]
            },
            {
                title: "Processes, Threads & Scheduling",
                content: "A Process is a program in execution, with its own address space. A Thread is a lightweight execution unit inside a process. The scheduler allocates CPU time using algorithms like Round Robin or First-Come-First-Serve.",
                video: "z2A3_kP1lDk",
                quiz: [
                    { q: "What shares address space and resources inside a process?", o: ["Program", "Thread", "System Call"], a: 1 },
                    { q: "Which algorithm schedules tasks in rotating slices?", o: ["Round Robin", "SJF", "FCFS"], a: 0 }
                ]
            },
            {
                title: "Virtual Memory & Paging Mechanics",
                content: "Operating systems use Virtual Memory to abstract physical RAM. Physical memory is divided into fixed-size blocks called Frames, and virtual memory into matching blocks called Pages. The MMU handles page translation.",
                video: "2coBzV_9fhs",
                quiz: [
                    { q: "What blocks partition virtual memory space?", o: ["Frames", "Segments", "Pages"], a: 2 },
                    { q: "What hardware processes address translations?", o: ["ALU", "MMU", "DMA"], a: 1 }
                ]
            },
            {
                title: "Deadlocks & Mutual Exclusion",
                content: "A Deadlock occurs when processes are blocked waiting for resources held by each other. Four conditions must hold for deadlock: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait.",
                video: "r7P7z5z4g98",
                quiz: [
                    { q: "How many conditions must concurrently hold for deadlock to occur?", o: ["2 conditions", "3 conditions", "4 conditions"], a: 2 },
                    { q: "Which condition holds resources while waiting for new ones?", o: ["Mutual Exclusion", "Hold and Wait", "Circular Wait"], a: 1 }
                ]
            },
            {
                title: "File Systems & Disk Partitioning",
                content: "File Systems manage how data is stored and retrieved. Concepts include directory structures, file allocation methods (contiguous, linked, indexed), and sector layouts on disk drives.",
                video: "rM89_j6j1j8",
                quiz: [
                    { q: "What indexes directories and files on storage tables?", o: ["File System", "Kernel Mode", "Scheduler"], a: 0 },
                    { q: "Which file allocation method has zero external fragmentation?", o: ["Contiguous", "Indexed", "Sequential"], a: 1 }
                ]
            }
        ],
        path: [
            { milestone: "System Space vs User Space", desc: "Understanding privilege levels and hardware control boundaries." },
            { milestone: "Scheduler Analysis", desc: "Calculating CPU scheduling times for different algorithms." },
            { milestone: "Paging Operations", desc: "Simulating page tables and virtual address translations." },
            { milestone: "Deadlock Prevention", desc: "Learning Banker's algorithm and resource allocation graphs." }
        ]
    },
    cn: {
        name: "Computer Networks (CN)",
        badge: "Network Architect",
        icon: "🌐",
        img: "svg-placeholder",
        desc: "Study OSI networks layer hierarchy, TCP/IP structures, routing protocols, subnet configurations, and IP addressing.",
        chapters: [
            {
                title: "OSI Reference Model Levels",
                content: "The OSI model standardizes network systems into 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. The alternative TCP/IP suite consolidates these into 4 functional tiers.",
                video: "IPvYjXCsTg8",
                quiz: [
                    { q: "How many layers are in the OSI model?", o: ["4", "5", "7"], a: 2 },
                    { q: "Which layer handles electrical signal transmissions?", o: ["Network Layer", "Physical Layer", "Application Layer"], a: 1 }
                ]
            },
            {
                title: "IP Addressing & Subnetting",
                content: "IPv4 addresses are 32-bit values divided into Classes (A, B, C, D). Subnet masks split addresses into Network IDs and Host IDs, optimizing resource usage in local area networks.",
                video: "s_NttgN4fV4",
                quiz: [
                    { q: "How many bits are in an IPv4 address?", o: ["16 bits", "32 bits", "64 bits"], a: 1 },
                    { q: "What splits IP addresses into host and network portions?", o: ["Subnet Mask", "DNS", "TCP Handshake"], a: 0 }
                ]
            },
            {
                title: "Routing Protocols & Networks Layer",
                content: "Routers operate at the Network Layer (Layer 3) to forward packets. Key routing protocols include RIP (distance-vector), OSPF (link-state), and BGP (path-vector).",
                video: "v4sW_49E-jE",
                quiz: [
                    { q: "What layer processes packet routing decisions?", o: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"], a: 1 },
                    { q: "Which protocol routes global internet traffic?", o: ["OSPF", "RIP", "BGP"], a: 2 }
                ]
            },
            {
                title: "TCP & UDP Transport Protocols",
                content: "The Transport Layer handles end-to-end communication. TCP is connection-oriented, ensuring reliable delivery. UDP is connectionless, prioritizing speed over reliability.",
                video: "3B5D1R-J0g8",
                quiz: [
                    { q: "Which protocol guarantees reliable, ordered packet delivery?", o: ["TCP", "UDP", "IP"], a: 0 },
                    { q: "Which is connectionless?", o: ["TCP", "DNS", "UDP"], a: 2 }
                ]
            },
            {
                title: "Application Protocol Suite (DNS, HTTP)",
                content: "The Application Layer provides user-facing services. DNS translates human-readable hostnames to IP addresses. HTTP/HTTPS handle web content delivery.",
                video: "H1apLgR_LhU",
                quiz: [
                    { q: "What translates hostnames into IP values?", o: ["DHCP", "DNS", "HTTP"], a: 1 },
                    { q: "Which port does standard unsecured HTTP use?", o: ["Port 22", "Port 80", "Port 443"], a: 1 }
                ]
            }
        ],
        path: [
            { milestone: "OSI Layer Layout", desc: "Understanding encapsulation from Application down to Physical layers." },
            { milestone: "CIDR Notation Calculations", desc: "Splitting classes and calculating host network boundaries." },
            { milestone: "Socket Connects", desc: "Analyzing TCP handshakes and connection management." },
            { milestone: "DNS and Web Routing", desc: "Understanding DNS lookups and HTTP message structures." }
        ]
    },
    dbms: {
        name: "DBMS Fundamentals",
        badge: "Schema Guru",
        icon: "📊",
        img: "svg-placeholder",
        desc: "Study Relational Algebra, ER schemas, database normal forms, ACID transactions, and lock integrity.",
        chapters: [
            {
                title: "Relational Theory & Architecture",
                content: "A Database Management System (DBMS) is software that manages database files. Relational systems model data in Tables (Relations) with Rows (Tuples) and Columns (Attributes).",
                video: "3EJlovevfcA",
                quiz: [
                    { q: "What represents a tuple in relational theory?", o: ["Column", "Row", "Key"], a: 1 },
                    { q: "What database model links records in columns and tables?", o: ["Hierarchical", "Network", "Relational"], a: 2 }
                ]
            },
            {
                title: "Entity-Relationship Modeling",
                content: "ER modeling maps real-world requirements into database designs. Key components are Entities (objects), Attributes (properties), and Relationships, representing cardinality (1:1, 1:N, N:M).",
                video: "c0_shEUyG_c",
                quiz: [
                    { q: "What represents objects in ER schemas?", o: ["Attribute", "Relationship", "Entity"], a: 2 },
                    { q: "What tracks primary identity markers inside an entity?", o: ["Foreign Key", "Primary Key Attribute", "Relation"], a: 1 }
                ]
            },
            {
                title: "Normalization Normal Forms",
                content: "Normalization minimizes redundancy and update anomalies. It organizes schemas through progressive forms: 1NF (atomic values), 2NF (remove partial dependency), and 3NF (remove transitive dependency).",
                video: "yE8eNObRzsw",
                quiz: [
                    { q: "What must be removed to satisfy 2NF criteria?", o: ["Partial dependency", "Transitive dependency", "Multivalued fields"], a: 0 },
                    { q: "1NF requires values in columns to be:", o: ["Unique", "Atomic", "Numerical"], a: 1 }
                ]
            },
            {
                title: "ACID Transaction Properties",
                content: "A transaction is a unit of database work. DBMS systems must enforce ACID properties: Atomicity (all or nothing), Consistency, Isolation (independent execution), and Durability (persisted changes).",
                video: "XAJy3A-Kao",
                quiz: [
                    { q: "What guarantees all transaction steps complete, or none do?", o: ["Atomicity", "Consistency", "Durability"], a: 0 },
                    { q: "What isolation handles independent parallel queries?", o: ["Atomicity", "Isolation", "Durability"], a: 1 }
                ]
            },
            {
                title: "Concurrency Locks & Recovery",
                content: "Concurrency control handles concurrent modifications. Key techniques include Two-Phase Locking (2PL) to ensure serializability, and transaction logging to recover database state after crashes.",
                video: "hKtDqFj4H2U",
                quiz: [
                    { q: "What lock system enforces transaction serializability?", o: ["1PL", "2PL", "Semaphores"], a: 1 },
                    { q: "What records database updates to restore files after crashes?", o: ["Transaction log", "Primary Index", "Query Cache"], a: 0 }
                ]
            }
        ],
        path: [
            { milestone: "ER Schema Graphs", desc: "Mapping relationships and setting primary keys." },
            { milestone: "Functional Dependencies", desc: "Analyzing candidate keys and mapping relationships." },
            { milestone: "Normalizing Tables", desc: "Decomposing databases up to 3NF/BCNF schemas." },
            { milestone: "Locks and Scheduling", desc: "Simulating lock lists to prevent read/write conflicts." }
        ]
    },
    html: {
        name: "HTML5 Development",
        badge: "Markup Architect",
        icon: "🏗️",
        img: "HTML.jpg",
        desc: "Study HTML5 page layouts, structural elements, semantic tags, tables, forms, and accessibility rules.",
        chapters: [
            {
                title: "Introduction to HTML5",
                content: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. The DOCTYPE tag declares the HTML version. Tags are nested to build page elements.",
                video: "pQN-pnXPaVg",
                quiz: [
                    { q: "Which tag declares HTML5 document specs?", o: ["<html>", "<!DOCTYPE html>", "<head>"], a: 1 },
                    { q: "Are HTML elements nested to structure pages?", o: ["Yes", "No", "Only forms"], a: 0 }
                ]
            },
            {
                title: "Semantic Markup Structures",
                content: "HTML5 introduces semantic tags that describe their purpose clearly: <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>. These tags improve SEO and accessibility.",
                video: "k1k4K1_nZlY",
                quiz: [
                    { q: "Which element is a semantic tag?", o: ["<div>", "<section>", "<span>"], a: 1 },
                    { q: "Do semantic tags improve search engine optimization?", o: ["Yes", "No", "Only for pictures"], a: 0 }
                ]
            },
            {
                title: "Forms & Input Controls",
                content: "Forms gather input from visitors. Key tags include <form>, <input>, <textarea>, and <button>. Use attributes like 'required', 'type' (email, number, password), and 'placeholder' for input validation.",
                video: "f9A8G7H6jI8",
                quiz: [
                    { q: "Which attribute blocks submission if inputs are empty?", o: ["placeholder", "validate", "required"], a: 2 },
                    { q: "Which input type locks text inputs to email configurations?", o: ["type='text'", "type='email'", "type='check'"], a: 1 }
                ]
            },
            {
                title: "Tables, Media & Attributes",
                content: "Organize tabular data using <table>, <tr>, <th>, and <td> tags. Embed media using <audio> and <video> tags, and set attributes like 'src', 'alt', 'controls', and 'autoplay'.",
                video: "W6NZ1rRJH18",
                quiz: [
                    { q: "Which tag houses rows inside standard tables?", o: ["<td>", "<th>", "<tr>"], a: 2 },
                    { q: "What attribute enables play/pause buttons on video blocks?", o: ["controls", "autoplay", "src"], a: 0 }
                ]
            },
            {
                title: "Web Standards & SEO Metadata",
                content: "Meta tags inside the <head> block define page metadata like descriptions, keywords, charsets, and viewport configurations, optimizing pages for search engines and responsive screens.",
                video: "1Rs2ND1RYYc",
                quiz: [
                    { q: "Where should meta tags be placed?", o: ["Inside <body>", "Inside <footer>", "Inside <head>"], a: 2 },
                    { q: "Which metadata tag scales sites to fit mobile screen views?", o: ["viewport", "charset", "description"], a: 0 }
                ]
            }
        ],
        path: [
            { milestone: "Basic tags & Setup", desc: "Setting up index.html, nesting lists and text formats." },
            { milestone: "Semantic layouts", desc: "Replacing divs with header, main, and footer elements." },
            { milestone: "Forms Validation", desc: "Building intake forms with validation rules." },
            { milestone: "SEO Meta Header integration", desc: "Integrating meta headers, titles, and structural tags." }
        ]
    },
    css: {
        name: "CSS Styling System",
        badge: "Styling Artist",
        icon: "🎨",
        img: "css.jpg",
        desc: "Learn styling, specificity selectors, box models, flexbox layouts, grid mechanics, and keyframe animations.",
        chapters: [
            {
                title: "CSS Foundation & Selectors",
                content: "CSS (Cascading Style Sheets) styles HTML documents. Apply rules using ID selectors (#), class selectors (.), or element selectors, with priority determined by CSS specificity rules.",
                video: "1Rs2ND1RYYc",
                quiz: [
                    { q: "What symbol targets classes in CSS rules?", o: ["#", ".", "@"], a: 1 },
                    { q: "Which selector has the highest styling specificity?", o: ["ID selector", "Class selector", "Element selector"], a: 0 }
                ]
            },
            {
                title: "The CSS Box Model",
                content: "Every HTML element is modeled as a box. The Box Model consists of: Content, Padding (space inside border), Border, and Margin (space outside border).",
                video: "H0BmxA1NqY8",
                quiz: [
                    { q: "What represents spacing INSIDE borders surrounding contents?", o: ["Margin", "Padding", "Outline"], a: 1 },
                    { q: "Is margin inside or outside borders?", o: ["Inside", "Outside", "It depends"], a: 1 }
                ]
            },
            {
                title: "Flexbox Layout Mechanics",
                content: "Flexbox provides a one-dimensional layout model. Align items along a main axis or cross axis using properties like justify-content, align-items, and flex-direction.",
                video: "3YW_c2_z4c0",
                quiz: [
                    { q: "Which axis does 'justify-content' control alignment on?", o: ["Main axis", "Cross axis", "Z-axis"], a: 0 },
                    { q: "Is flexbox layout model 1D or 2D?", o: ["1D model", "2D model", "Depends on cells"], a: 0 }
                ]
            },
            {
                title: "CSS Grid Layout System",
                content: "CSS Grid offers a two-dimensional layout model for rows and columns. Define columns using 'grid-template-columns' and place elements inside grid cells.",
                video: "rg7FvXnU9M8",
                quiz: [
                    { q: "Is CSS Grid 1D or 2D layout model?", o: ["1D model", "2D model", "Only columnar"], a: 1 },
                    { q: "What property configures grid column dimensions?", o: ["grid-gap", "grid-template-columns", "grid-direction"], a: 1 }
                ]
            },
            {
                title: "Transitions & Keyframe Animations",
                content: "Animate elements smoothly. Create state transitions using the 'transition' property, or define custom multi-stage animations using '@keyframes' rules.",
                video: "YszONjKpG5c",
                quiz: [
                    { q: "What rule declares multi-stage custom styling animations?", o: ["@keyframes", "@animation", "@transition"], a: 0 },
                    { q: "Which property controls durations of basic hover transitions?", o: ["hover-delay", "transition", "transform"], a: 1 }
                ]
            }
        ],
        path: [
            { milestone: "Cascade Fundamentals", desc: "Setting up colors, custom font sheets, and element styles." },
            { milestone: "Box Model Layouts", desc: "Mastering paddings, borders, margins, and overflow properties." },
            { milestone: "Responsive Layouts", desc: "Aligning layouts with Flexbox and CSS Grid." },
            { milestone: "Interactive Animations", desc: "Writing hover transitions, transforms, and keyframe animations." }
        ]
    },
    javascript: {
        name: "JavaScript Engine",
        badge: "Script Ninja",
        icon: "🥷",
        img: "js.jpg",
        desc: "Study client-side scripting, DOM objects, dynamic events, promises, and async-await flows.",
        chapters: [
            {
                title: "JavaScript Engine Basics",
                content: "JavaScript is a lightweight, interpreted scripting language with first-class functions. It runs in the browser, enabling interactive web pages. Declare variables using let, const, or var.",
                video: "W6NZ1rRJH18",
                quiz: [
                    { q: "Which variable declaration is block-scoped?", o: ["var", "let", "global"], a: 1 },
                    { q: "Does JS execute natively inside web browsers?", o: ["Yes", "No", "Only if compiled"], a: 0 }
                ]
            },
            {
                title: "DOM Manipulation & Events",
                content: "The Document Object Model (DOM) represents HTML pages as objects. Query elements using document.getElementById() or querySelector(), and attach interactive listeners like click or submit.",
                video: "y17RuWJnF4c",
                quiz: [
                    { q: "Which function queries classes or IDs using CSS queries?", o: ["getElementById", "querySelector", "findDOM"], a: 1 },
                    { q: "What does DOM stand for?", o: ["Document Object Model", "Dynamic Output Module", "Directed Operation Main"], a: 0 }
                ]
            },
            {
                title: "Asynchronous JavaScript (Promises)",
                content: "JavaScript is single-threaded. Handle asynchronous actions (like loading APIs) using Promises. A Promise can be pending, fulfilled (resolved), or rejected.",
                video: "OxMhS-R2_iU",
                quiz: [
                    { q: "What are the states of a Promise?", o: ["true / false", "pending / fulfilled / rejected", "ready / waiting"], a: 1 },
                    { q: "Is JavaScript single-threaded?", o: ["Yes", "No", "Only in browser threads"], a: 0 }
                ]
            },
            {
                title: "Async / Await Syntax",
                content: "Async and Await keywords provide a clean syntax for working with Promises. An async function always returns a promise, and await pauses execution until the promise resolves.",
                video: "cCol7MC49SM",
                quiz: [
                    { q: "What does an async function always return?", o: ["A Promise", "A string", "undefined"], a: 0 },
                    { q: "Where can you use the 'await' keyword?", o: ["In any function", "Strictly inside async functions", "At file root levels"], a: 1 }
                ]
            },
            {
                title: "Fetch API & JSON Serialization",
                content: "Request external resources using the Fetch API. Parse responses using fetch().then(r => r.json()), and convert JS objects to strings using JSON.stringify().",
                video: "tc8DU14qX6I",
                quiz: [
                    { q: "Which function serializes objects into JSON strings?", o: ["JSON.parse()", "JSON.stringify()", "Object.toString()"], a: 1 },
                    { q: "Which API issues HTTP calls to fetch web server files?", o: ["XML", "Fetch API", "DOM Parser"], a: 1 }
                ]
            }
        ],
        path: [
            { milestone: "Scripting basics", desc: "Writing console.logs, setting calculations, loops." },
            { milestone: "Dynamic DOM events", desc: "Selecting page text inputs, appending lists, styling via actions." },
            { milestone: "Asynchronous data calls", desc: "Understanding timeouts, fetch promises, and async methods." },
            { milestone: "Local Storage Persistence", desc: "Saving user options, themes, and game statistics in JSON." }
        ]
    }
};
