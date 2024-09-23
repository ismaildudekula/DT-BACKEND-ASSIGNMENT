# Events API

## Overview

The Events API allows you to manage events, including creating, retrieving, updating, and deleting event information. This API supports pagination for event listings and allows filtering based on recency.

## Base URL
/api/v3/app


## Endpoints

### 1. Get All Events or Event by ID

- **Endpoint:** `/events`
- **Method:** `GET`
- **Query Parameters:**
  - `id` (optional): The ID of the event you want to retrieve.
  - `type` (optional): Use `latest` to get the most recent events.
  - `limit` (optional): The number of events to retrieve per page (default: 10).
  - `page` (optional): The page number to retrieve (default: 1).

- **Example Requests:**
  - Get event by ID:
    ```
    GET /api/v3/app/events?id=64fcaadfca7e5e093dd50099
    ```
  - Get latest events:
    ```
    GET /api/v3/app/events?type=latest&limit=5&page=1
    ```

- **Response:**
  - **Success (200):** Returns event details or a list of events.
  - **Not Found (404):** If the event does not exist or no events found.
  - **Error (400):** If the request parameters are invalid.

### 2. Create a New Event

- **Endpoint:** `/events`
- **Method:** `POST`
- **Payload:**
  - `name`: Name of the event.
  - `tagline`: Tagline for the event.
  - `schedule`: Date and time of the event (ISO format).
  - `description`: Description of the event.
  - `moderator`: Name of the moderator.
  - `category`: Category of the event.
  - `sub_category`: Subcategory of the event.
  - `rigor_rank`: Integer value representing the rigor rank.
  - `files[image]`: Optional image file upload.

- **Example Request:**
    ```json
    {
      "name": "Young Entrepreneurs Summit 2024",
      "tagline": "Connect and grow together",
      "schedule": "2024-10-30T10:00:00Z",
      "description": "An event for young leaders to connect and grow.",
      "moderator": "Ismail Dudekula",
      "category": "Business",
      "sub_category": "Entrepreneurship",
      "rigor_rank": 5
    }
    ```

- **Response:**
  - **Success (201):** Returns a confirmation message and the ID of the created event.
  - **Error (400):** If required fields are missing.

### 3. Update an Event

- **Endpoint:** `/events/:id`
- **Method:** `PUT`
- **Payload:** Same as the POST payload.

- **Example Request:**

Here's a sample README.md file for your Events API, written in Markdown format. You can customize it further based on your project specifics.

markdown
Copy code
# Events API

## Overview

The Events API allows you to manage events, including creating, retrieving, updating, and deleting event information. This API supports pagination for event listings and allows filtering based on recency.

## Base URL

/api/v3/app

markdown
Copy code

## Endpoints

### 1. Get All Events or Event by ID

- **Endpoint:** `/events`
- **Method:** `GET`
- **Query Parameters:**
  - `id` (optional): The ID of the event you want to retrieve.
  - `type` (optional): Use `latest` to get the most recent events.
  - `limit` (optional): The number of events to retrieve per page (default: 10).
  - `page` (optional): The page number to retrieve (default: 1).

- **Example Requests:**
  - Get event by ID:
    ```
    GET /api/v3/app/events?id=64fcaadfca7e5e093dd50099
    ```
  - Get latest events:
    ```
    GET /api/v3/app/events?type=latest&limit=5&page=1
    ```

- **Response:**
  - **Success (200):** Returns event details or a list of events.
  - **Not Found (404):** If the event does not exist or no events found.
  - **Error (400):** If the request parameters are invalid.

### 2. Create a New Event

- **Endpoint:** `/events`
- **Method:** `POST`
- **Payload:**
  - `name`: Name of the event.
  - `tagline`: Tagline for the event.
  - `schedule`: Date and time of the event (ISO format).
  - `description`: Description of the event.
  - `moderator`: Name of the moderator.
  - `category`: Category of the event.
  - `sub_category`: Subcategory of the event.
  - `rigor_rank`: Integer value representing the rigor rank.
  - `files[image]`: Optional image file upload.

- **Example Request:**
    ```json
    {
      "name": "Young Entrepreneurs Summit 2024",
      "tagline": "Connect and grow together",
      "schedule": "2024-10-30T10:00:00Z",
      "description": "An event for young leaders to connect and grow.",
      "moderator": "Ismail Dudekula",
      "category": "Business",
      "sub_category": "Entrepreneurship",
      "rigor_rank": 5
    }
    ```

- **Response:**
  - **Success (201):** Returns a confirmation message and the ID of the created event.
  - **Error (400):** If required fields are missing.

### 3. Update an Event

- **Endpoint:** `/events/:id`
- **Method:** `PUT`
- **Payload:** Same as the POST payload.

- **Example Request:**
PUT /api/v3/app/events/64fcaadfca7e5e093dd50099


- **Response:**
- **Success (200):** Returns a confirmation message.
- **Not Found (404):** If the event does not exist.

### 4. Delete an Event

- **Endpoint:** `/events/:id`
- **Method:** `DELETE`

- **Example Request:**

Here's a sample README.md file for your Events API, written in Markdown format. You can customize it further based on your project specifics.

markdown
Copy code
# Events API

## Overview

The Events API allows you to manage events, including creating, retrieving, updating, and deleting event information. This API supports pagination for event listings and allows filtering based on recency.

## Base URL

/api/v3/app

markdown
Copy code

## Endpoints

### 1. Get All Events or Event by ID

- **Endpoint:** `/events`
- **Method:** `GET`
- **Query Parameters:**
  - `id` (optional): The ID of the event you want to retrieve.
  - `type` (optional): Use `latest` to get the most recent events.
  - `limit` (optional): The number of events to retrieve per page (default: 10).
  - `page` (optional): The page number to retrieve (default: 1).

- **Example Requests:**
  - Get event by ID:
    ```
    GET /api/v3/app/events?id=64fcaadfca7e5e093dd50099
    ```
  - Get latest events:
    ```
    GET /api/v3/app/events?type=latest&limit=5&page=1
    ```

- **Response:**
  - **Success (200):** Returns event details or a list of events.
  - **Not Found (404):** If the event does not exist or no events found.
  - **Error (400):** If the request parameters are invalid.

### 2. Create a New Event

- **Endpoint:** `/events`
- **Method:** `POST`
- **Payload:**
  - `name`: Name of the event.
  - `tagline`: Tagline for the event.
  - `schedule`: Date and time of the event (ISO format).
  - `description`: Description of the event.
  - `moderator`: Name of the moderator.
  - `category`: Category of the event.
  - `sub_category`: Subcategory of the event.
  - `rigor_rank`: Integer value representing the rigor rank.
  - `files[image]`: Optional image file upload.

- **Example Request:**
    ```json
    {
      "name": "Young Entrepreneurs Summit 2024",
      "tagline": "Connect and grow together",
      "schedule": "2024-10-30T10:00:00Z",
      "description": "An event for young leaders to connect and grow.",
      "moderator": "Ismail Dudekula",
      "category": "Business",
      "sub_category": "Entrepreneurship",
      "rigor_rank": 5
    }
    ```

- **Response:**
  - **Success (201):** Returns a confirmation message and the ID of the created event.
  - **Error (400):** If required fields are missing.

### 3. Update an Event

- **Endpoint:** `/events/:id`
- **Method:** `PUT`
- **Payload:** Same as the POST payload.

- **Example Request:**
PUT /api/v3/app/events/64fcaadfca7e5e093dd50099

markdown
Copy code

- **Response:**
- **Success (200):** Returns a confirmation message.
- **Not Found (404):** If the event does not exist.

### 4. Delete an Event

- **Endpoint:** `/events/:id`
- **Method:** `DELETE`

- **Example Request:**
DELETE /api/v3/app/events/64fcaadfca7e5e093dd50099


- **Response:**
- **Success (200):** Returns a confirmation message.
- **Not Found (404):** If the event does not exist.

## Error Handling

All responses will return an appropriate HTTP status code along with a message detailing the error.

## License

This API is licensed under the MIT License. See LICENSE for more information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
