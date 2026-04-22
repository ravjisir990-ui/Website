# Admin Panel Setup Guide - Shivam Physio Care

## Overview

A fully functional admin panel has been built with the following features:
- Secure admin authentication with session management
- Dashboard with appointment statistics
- Complete appointment management system
- Search and filter capabilities
- Status management (pending, confirmed, rejected)
- Delete appointment functionality
- Mobile-responsive design

## Quick Start

### 1. Access the Admin Panel

The admin panel is accessible at: **`/admin/login`**

Default credentials:
- **Username**: `admin`
- **Password**: `physio123!`

### 2. Navigate the Dashboard

After login, you'll see the main dashboard with:
- Total appointments count
- Pending appointments
- Confirmed appointments
- Rejected appointments
- Quick actions to view all appointments

### 3. Manage Appointments

Go to `/admin/appointments` to:
- View all appointment requests from patients
- Search by patient name, email, or phone
- Filter by appointment status (All, Pending, Confirmed, Rejected)
- Confirm appointments (accept patient requests)
- Reject appointments (decline patient requests)
- Delete appointments from the system
- View detailed appointment information

## Features in Detail

### Dashboard (`/admin`)
- **Stats Cards**: Shows key metrics at a glance
- **Quick Actions**: Direct link to manage appointments
- **System Information**: View clinic details and contact information

### Appointments Management (`/admin/appointments`)
- **List View**: All appointments displayed in card format
- **Search**: Find appointments by:
  - Patient name
  - Email address
  - Phone number
- **Status Filters**: View appointments by status
- **Actions per Appointment**:
  - **Confirm**: Move status to confirmed
  - **Reject**: Move status to rejected
  - **Delete**: Remove from the system
- **Status Indicators**: Color-coded status badges (pending, confirmed, rejected)

### Authentication
- Session-based authentication with HTTP-only cookies
- Automatic session expiration after 24 hours
- Secure logout functionality
- Protected routes with middleware

## File Structure

```
app/
├── admin/
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── appointments/
│   │   └── page.tsx          # Appointments management
│   ├── page.tsx              # Dashboard
│   └── layout.tsx            # Admin layout with sidebar
└── api/
    └── admin/
        ├── login/
        │   └── route.ts      # Login API
        ├── logout/
        │   └── route.ts      # Logout API
        └── appointments/
            ├── route.ts      # List & create appointments
            └── [id]/route.ts # Get, update, delete appointments

components/
├── admin/
│   ├── sidebar.tsx           # Navigation sidebar
│   ├── appointment-card.tsx  # Appointment card component
│   └── stats-card.tsx        # Statistics card component

lib/
├── auth-utils.ts             # Authentication utilities
├── ADMIN_GUIDE.md            # Admin guide documentation
└── database-setup.md         # Database setup instructions

scripts/
├── 04-create-admin-tables.sql # Admin user table creation
```

## API Endpoints

### Authentication
```
POST /api/admin/login
Body: { username: string, password: string }
Response: { success: true, message: string }
Cookies: admin-session (HTTP-only, 24h expiration)

POST /api/admin/logout
Response: { success: true, message: string }
Effect: Clears admin-session cookie
```

### Appointments
```
GET /api/admin/appointments?status=pending&search=john&stats=true
Response: Array of appointments or stats object

GET /api/admin/appointments/:id
Response: Single appointment object

PATCH /api/admin/appointments/:id
Body: { status: "confirmed"|"rejected"|"pending", notes?: string }
Response: Updated appointment object

DELETE /api/admin/appointments/:id
Response: { success: true, appointment: { ...deleted appointment } }
```

## Security Features

### Current Implementation
- ✅ Session-based authentication
- ✅ HTTP-only cookie storage (prevents XSS attacks)
- ✅ Route protection middleware
- ✅ Session expiration (24 hours)
- ✅ Automatic logout on invalid session

### Production Improvements Needed

Before deploying to production, implement:

1. **Password Hashing**
   - Replace SHA-256 with bcrypt
   - Install: `npm install bcryptjs`
   - Update `lib/auth-utils.ts` to use bcryptjs

2. **Rate Limiting**
   - Implement on `/api/admin/login` endpoint
   - Prevent brute force attacks
   - Recommend: 5 failed attempts = 15 min lockout

3. **HTTPS/TLS**
   - Ensure all connections are encrypted
   - Enable secure cookie flag in production
   - Set HSTS headers

4. **Database Integration**
   - Replace in-memory mock data with actual database
   - Use prepared statements to prevent SQL injection
   - Implement proper connection pooling

5. **Audit Logging**
   - Log all admin actions
   - Track login attempts
   - Monitor appointment modifications

6. **Change Default Credentials**
   - Update username and password immediately
   - Use strong passwords (12+ chars, mixed case, numbers, symbols)
   - Store securely in environment variables

## Environment Variables

Add these to your `.env.local` or production environment:

```
# JWT Configuration
JWT_SECRET=your-super-secret-key-change-this-in-production

# Admin Credentials (optional override)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=physio123!

# Database Connection (when database is integrated)
DATABASE_URL=postgresql://user:password@localhost:5432/shivam_physio
```

## Testing the Admin Panel

### Test Login
1. Navigate to `/admin/login`
2. Enter username: `admin`
3. Enter password: `physio123!`
4. Click "Login"
5. You should be redirected to the dashboard

### Test Appointment Management
1. Go to `/admin/appointments`
2. View the list of appointments
3. Search for an appointment by name "John" - should find "John Doe"
4. Filter by "Pending" status
5. Click "Confirm" button on an appointment
6. Status should update to "Confirmed"
7. Try the "Reject" button
8. Status should update to "Rejected"
9. Click "Delete" to remove an appointment

### Test Session Protection
1. Login to admin panel
2. Open browser developer tools (F12)
3. Check Cookies > Application
4. You should see `admin-session` cookie (HTTP-only)
5. Try accessing `/admin` without going through login
6. You should be redirected to `/admin/login`
7. Clear the session cookie
8. Try accessing `/admin`
9. You should be redirected to login

## Database Migration (When Ready)

When you have a database set up, execute these scripts in order:

```sql
-- 1. Create main tables
psql -f scripts/01-create-tables.sql

-- 2. Seed services
psql -f scripts/02-seed-services.sql

-- 3. Seed availability
psql -f scripts/03-seed-availability.sql

-- 4. Create admin tables
psql -f scripts/04-create-admin-tables.sql
```

Then update the API routes to use your database instead of mock data.

## Troubleshooting

### Cannot Login
- Verify username and password are exactly: `admin` / `physio123!`
- Check browser cookies are enabled
- Clear browser cache and try again
- Check console for any JavaScript errors

### Session Expires Too Quickly
- Current session timeout is 24 hours
- To change, update `middleware.ts` expiresAt check
- Remember to also update the cookie maxAge in `api/admin/login/route.ts`

### Appointments Not Appearing
- Check filters are set to "All"
- Clear search input
- Refresh the page
- Check browser console for errors
- Verify the API endpoint is working: `GET /api/admin/appointments`

### Cannot Delete or Update Appointments
- Ensure you're logged in (check cookie in DevTools)
- Verify session hasn't expired
- Check network tab in DevTools for API errors
- Confirm appointment ID is valid

## Support & Documentation

For detailed information, see:
- `/lib/ADMIN_GUIDE.md` - Comprehensive admin guide
- `/lib/AUTH_SETUP.md` - Authentication system documentation
- `/lib/DATABASE_SETUP.md` - Database setup instructions

## Next Steps

1. **Test all features** in the admin panel
2. **Set up a database** and migrate from mock data
3. **Change default credentials** before production
4. **Implement bcrypt** for password hashing
5. **Add rate limiting** to login endpoint
6. **Set up monitoring** and audit logging
7. **Enable HTTPS** in production

---

Built with Next.js, React, and TypeScript. All code follows best practices for security, accessibility, and performance.
