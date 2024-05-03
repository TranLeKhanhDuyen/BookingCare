import { AuthGuard, GuestGuard, RoleBasedGuard } from '@guards'
import Login from '@pages/authen/login'
import Register from '@pages/authen/register'
import DoctorDetailPage from '@pages/doctor-details/doctor'
import HomePage from '@pages/homepage/home'
import AllUsers from '@pages/manage/all-users/all-users'
import CreatePatient from '@pages/manage/create-patient/create-patient'
import CreateUser from '@pages/manage/create-user/create-user'
import DoctorAppointments from '@pages/manage/doctor-appointments/doctor-appointments'
import AllPatients from '@pages/manage/all-patients/all-patients'
import DoctorSchedule from '@pages/manage/doctor-schedule/doctor-schedule'
import Manager from '@pages/manage/manage'
import MyAppointments from '@pages/manage/my-appointments/doctor-appointments'
import { UserRole } from '@services/models/user-role'
import { FC } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import SpecialistPage from '@pages/secondary-page/specialist-page'
import HandbookPage from '@pages/secondary-page/handbook-page'
import FacilitiesPage from '@pages/secondary-page/facilities-page'

const Router: FC = () => {
  return useRoutes([
    {
      path: '',
      element: <HomePage />
    },
    {
      path: 'specialist',
      element: <SpecialistPage />
    },
    {
      path: 'handbook',
      element: <HandbookPage />
    },
    {
      path: 'doctor',
      element: <DoctorDetailPage />
    },
    {
      path: 'facilities',
      element: <FacilitiesPage />
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        }
      ]
    },
    {
      path: 'doctors',
      children: [
        {
          path: ':id',
          element: <DoctorDetailPage />
        }
      ]
    },
    {
      path: 'manage',
      element: (
        <AuthGuard>
          <RoleBasedGuard
            accessibleRoles={[
              UserRole.ADMIN,
              UserRole.SUPER_ADMIN,
              UserRole.DOCTOR
            ]}
          >
            <Manager />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        {
          index: true,
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <Navigate to='/manage/all-users' replace />
            </RoleBasedGuard>
          )
        },
        {
          path: 'all-users',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <AllUsers />
            </RoleBasedGuard>
          )
        },
        {
          path: 'create-users',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <CreateUser />
            </RoleBasedGuard>
          )
        },
        {
          path: 'patients',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <AllPatients />
            </RoleBasedGuard>
          )
        },
        {
          path: 'patients/create',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <CreatePatient />
            </RoleBasedGuard>
          )
        },
        {
          path: 'doctors/:doctorId/appointments',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <DoctorAppointments />
            </RoleBasedGuard>
          )
        },
        {
          path: 'doctors/me/appointments',
          element: (
            <RoleBasedGuard accessibleRoles={[UserRole.DOCTOR]}>
              <MyAppointments />
            </RoleBasedGuard>
          )
        },
        {
          path: 'doctors/me/schedule',
          element: (
            <RoleBasedGuard accessibleRoles={[UserRole.DOCTOR]}>
              <DoctorSchedule />
            </RoleBasedGuard>
          )
        }
      ]
    }
  ])
}

export default Router
