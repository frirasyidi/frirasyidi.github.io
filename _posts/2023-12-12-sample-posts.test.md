---
layout: post
title: Sample post
description: The principles and technique to help understand when test coverage can be considered as "enough".
date: 2023-12-06
categories: test-doc
toc: true
---

## Lists

### Unordered lists

- Lorem.
- Quibusdam!
- Recusandae.
- Facere?
  - Sit?
  - Recusandae!
  - Ea!
  - Amet!
    - Eos.
    - Similique.
    - Excepturi.
    - Nemo?

### Ordered lists

1. Aspernatur!
2. Ipsam.
3. Accusantium.
4. Dignissimos?
   1. Nesciunt.
   2. Voluptatum?
   3. Vero!
   4. Nesciunt!
      1. Ea.
      2. Cumque!
      3. Excepturi.
      4. Sint.
      5. Reprehenderit.
      6. Natus?
      7. Numquam.
      8. Iusto.
      9. Voluptate!
      10. Iusto?

### Combination

- Aspernatur!
- Ipsam.
- Accusantium.
- Dignissimos?
  1.  Nesciunt.
  2.  Voluptatum?
  3.  Vero!
  4.  Nesciunt!
      - Ea.
      - Cumque!
      - Excepturi.
      - Sint.
        1.  Reprehenderit.
        2.  Natus?
        3.  Numquam.
        4.  Iusto.

### Custom list variants

<ol class="list-abc">
  <li>Nesciunt.</li>
  <li>Voluptatum?</li>
  <li>Vero!</li>
  <li>Nesciunt!</li>
</ol>

<ol class="list-abc-upper">
  <li>Nesciunt.</li>
  <li>Voluptatum?</li>
  <li>Vero!</li>
  <li>Nesciunt!</li>
</ol>

<ol class="list-roman">
  <li>Nesciunt.</li>
  <li>Voluptatum?</li>
  <li>Vero!</li>
  <li>Nesciunt!</li>
</ol>

<ol class="list-roman-upper">
  <li>Nesciunt.</li>
  <li>Voluptatum?</li>
  <li>Vero!</li>
  <li>Nesciunt!</li>
</ol>

<ol class="list-greek">
  <li>Nesciunt.</li>
  <li>Voluptatum?</li>
  <li>Vero!</li>
  <li>Nesciunt!</li>
</ol>

<ol class="list-steps">
  <li>Nesciunt.</li>
  <li>Voluptatum?</li>
  <li>Vero!</li>
  <li>Nesciunt!</li>
</ol>

<ol>
  <li class="list-checked">Nesciunt.</li>
  <li class="list-crossed">Voluptatum?</li>
  <li class="list-unknown">Vero!</li>
</ol>

### Lists with rich contents

Let's demonstrate a list:

- This is an unordered list that contains multiple different contents such as a table and some paragraphs below it:

    | Number | in English | in Bahasa Indonesia |
    | ------ | ---------- | ------------------- |
    | 1      | One        | Satu                |
    | 2      | Two        | Dua                 |
    | 3      | Three      | Tiga                |

    **Note:**
    - this is just a simple table
    - the table contains the numbers:
      - its character,
      - its name in English, and
      - its name in Bahasa Indonesia
    - don't think too hard about it

- This is the second list item on the list and will contain multiple paragraphs and a quote in it:

    A paragraph directly under the first one

    > and a quote as well

    Now we know how it looks!

- The last paragraph in the list shall contain an image of some kind:
  
  ![image sample](/assets/2020-03-04-shut-up/non-existant-jenny.webp)

  Does it render well?

Okay, that's for an unordered list. Let's see the same content for an ordered list:

1. This is an unordered list that contains multiple different contents such as a table and some paragraphs below it:
   
      | Number | in English | in Bahasa Indonesia |
      | ------ | ---------- | ------------------- |
      | 1      | One        | Satu                |
      | 2      | Two        | Dua                 |
      | 3      | Three      | Tiga                |

      **Note:**
      1. this is just a simple table
      2. the table contains the numbers:
          1. its character,
          2. its name in English, and
          3. its name in Bahasa Indonesia
      3. don't think too hard about it
   
2. This is the second list item on the list and will contain multiple paragraphs and a quote in it:
   
   A paragraph directly under the first one

   > and a quote as well

   Now we know how it looks!
3. The last paragraph in the list shall contain an image of some kind:
   
   ![image](/assets/2020-03-04-shut-up/non-existant-jenny.webp)

   Does it render well?

## Blockquote

> This is a simple blockquote, just a single line.

> This is a multiline blockquote, pretty long in terms of text. It serves as an example of a blockquote with multiple lines. The purpose of this blockquote is to demonstrate how to include a longer quote in your markdown document. You can use blockquotes to highlight important information or to provide additional context for your readers. Blockquotes are a great way to break up the text and make it more visually appealing. They can also be used to emphasize key points or to provide supporting evidence for your statements. Overall, blockquotes are a useful tool in markdown formatting.

> This is a blockquote with a **bold** word.
>
> This is a blockquote with an *italic* word.
>
> This is a blockquote with a [link](https://example.com).
>
> This is a blockquote with a `code` snippet.

> This is a blockquote with a horizontal rule:
>
> <hr/>

> This is a blockquote with a numbered list:
> 
> 1. First item
> 2. Second item
> 3. Third item
>     1. First item
>     2. Second item
>     3. Third item

> This is a blockquote with a bulleted list:
> 
> - First item
> - Second item
> - Third item
>     - First item
>     - Second item
>     - Third item

> This is a blockquote with a table:
> 
> | Header 1 | Header 2 |
> | -------- | -------- |
> | Cell 1   | Cell 2   |
> | Cell 3   | Cell 4   |
