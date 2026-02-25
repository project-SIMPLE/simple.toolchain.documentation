# Non-functional components

These components provide UI elements without complex business logic and are reused throughout the application.

#### 6.2.1 Header

**Location**: Top of every page  
**Composition**:

- SIMPLE logo (clickable, navigates to home)  
- Language selector button

**Supported Languages**: English, French, Vietnamese, Thai

#### 6.2.2 Footer

**Location**: Bottom of every page  
**Composition**: Partner organization logos

#### 6.2.3 Button

**Purpose**: Reusable styled button component

**Props**:

- onClick: function to be called on the when the onClick() hook is triggered  
- text: optional text to be displayed inside of the button  
- bgColor: Tailwind string value added inside of the classname attribute of the button to specify the background color  
- className: Extra tailwind utilities added on top of the one baked into the button component  
- customStyle: Extra style read as inline css for more precise and edge case customizations

#### 6.2.4 LanguageSelector

**Purpose**: Language switching interface

**Library**: react-i18next v15.0.2

**Supported Languages**:

- English  
- French  
- Vietnamese  
- Thai

**Implementation**: The LanguageSelector component uses the react-i18next library (i18n) to manage internationalization. When a language is selected, i18n propagates the language change throughout the entire application, automatically updating all translated text.

**Technical Details**:

- **Props**: None \- component is self-contained  
- **State**: No local state \- language state managed by react-i18next context  
- **Behavior**: Language selection is persisted and applied globally to all interface elements

**Usage**: Component appears in the header and provides a dropdown or button interface for language selection.
