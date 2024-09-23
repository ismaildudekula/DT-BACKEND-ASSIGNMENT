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
    ![1  Events-api-by-id](https://github.com/user-attachments/assets/66b2d2b6-79ac-4e4a-9585-14948dd2fe1e)

  - Get latest events:
    ```
    GET /api/v3/app/events?type=latest&limit=5&page=1
    ```

    ![2  Events-api-latest-events](https://github.com/user-attachments/assets/6e1bbe97-3067-433a-88ac-db36106f2f84)


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
 
  ![3  Event-api-create-event](https://github.com/user-attachments/assets/03c33e0c-cdaf-4006-9b4d-2084a9e2b757)



### 3. Update an Event

- **Endpoint:** `/events/:id`
- **Method:** `PUT`
- **Payload:** Same as the POST payload.

- **Example Request:**
- PUT /api/v3/app/events/66f12cb7186247fde8b75c3f

- **Response:**
- **Success (200):** Returns a confirmation message.
- **Not Found (404):** If the event does not exist.

  ![4  Events-api-update-event](https://github.com/user-attachments/assets/d4f390c7-5eb6-4fc4-90fa-499fba45f444)


### 4. Delete an Event
- **Endpoint:** `/events/:id`
- **Method:** `DELETE`

- **Example Request:**
DELETE /api/v3/app/events/64fcaadfca7e5e093dd50099


- **Response:**
- **Success (200):** Returns a confirmation message.
- **Not Found (404):** If the event does not exist.
  
![5  Events-api-delete](https://github.com/user-attachments/assets/8af9f1b0-c5be-4008-8d3d-0e1b0734acf1)


## Error Handling

All responses will return an appropriate HTTP status code along with a message detailing the error.

## License

This API is licensed under the MIT License. See LICENSE for more information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
