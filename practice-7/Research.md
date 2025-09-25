## Use Cases for Controlled Components

### 1. Real-time Validation
- **Scenario**: Email validation while the user types
- **Problem it solves**: Immediate feedback to the user about format errors
- **Example**: Show "Invalid email" in red while the user types

### 2. Dynamic Forms
- **Scenario**: Fields that interact with each other and update dynamically
- **Problem it solves**: Complex interactivity between form fields
- **Example**: City field that updates based on the selected country

### 3. Automatic Formatting
- **Scenario**: Formatting phone numbers or credit cards while typing
- **Problem it solves**: Better user experience with visual formatting
- **Example**: 1234567890 automatically converts to (123) 456-7890

### 4. Forms with Shared State
- **Scenario**: Forms where state is shared between multiple components
- **Problem it solves**: Data synchronization between different parts of the application
- **Example**: Configuration form where changes are immediately reflected in other components


## Use Cases for Uncontrolled Components

### 1. Simple Forms
- **Scenario**: Basic contact form without complex validation
- **Problem it solves**: Less code and better performance for simple cases
- **Example**: "Contact us" form with name, email and message

### 2. Third-party Library Integration
- **Scenario**: Integration with advanced text editors or map libraries
- **Problem it solves**: Compatibility with libraries that manipulate the DOM directly
- **Example**: Integrating a Google Maps

### 3. File Upload
- **Scenario**: File selector for upload
- **Problem it solves**: The value is read-only and cannot be set programmatically
- **Example**: `<input type="file" />` for uploading images

### 4. Forms with Many Fields
- **Scenario**: Registration forms with 20+ fields
- **Problem it solves**: Performance optimization avoiding unnecessary re-renders
- **Example**: User registration form with many optional fields