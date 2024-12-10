# Feature Sequence Diagram: Profile Page

## Feature Description

The **Profile Page** displays the user's sold items, bought items, and their contact information related to their account. It includes an editing functionality for the contact information where users can can click the edit button and they will be presented with a modal view to edit their contact information and either save or cancel their changes. The page will be dynamically updated. The profile page also shows a grid of the user's bought and sold items.


```mermaid
sequenceDiagram
    participant User
    participant UI
    participant IndexedDB

    User->>UI: Clicks "Edit" on contact info
    UI->>User: Displays modal with current info
    User->>UI: Edits contact info and clicks "Save"
    UI->>IndexedDB: Save updated contact info
    IndexedDB->>UI: Confirm save
    UI->>User: Closes modal, updates profile page with contact info and items
    UI->>User: Displays bought and sold items
``````
