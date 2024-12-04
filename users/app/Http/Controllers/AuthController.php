<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken($user->name)->plainTextToken;

        return response()->json([
            'status' => 200,
            'message' => 'Login successfully',
            'data' => [
                'token' => $token
            ]
        ], Response::HTTP_OK);
    }

    public function register(Request $request)
    {
        $user = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
            'phone' => 'required|string',
            'address' => 'required|string'
        ]);

        // $pass = $user['password'];

        if(Hash::needsRehash($user['password'])) {
            $user['password'] = Hash::make($user['password']);
        }

        User::create($user);

        return response()->json([
            'status' => 200,
            'message' => 'Register successfully',
            'data' => null
        ], Response::HTTP_OK);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logout successfully'
        ], Response::HTTP_OK);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'oldPassword' => 'required|string',
            'newPassword' => 'required|string',
        ]);

        $user = $request->user();

        if (!Hash::check($request->oldPassword, $user->password)) {
            return response()->json([
                'status' => 400,
                'message' => 'The provided credentials are incorrect.',
                'data' => null
            ], Response::HTTP_BAD_REQUEST);
        }

        $user->password = Hash::make($request->newPassword);
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'Password changed successfully',
            'data' => null
        ], Response::HTTP_OK);
    }

    public function getCurrentUser(Request $request)
    {
        return response()->json([
            'status' => 200,
            'message' => 'Get user succesfully',
            'data' => $request->user()
        ], Response::HTTP_OK);
    }


    public function updateUser(Request $request)
    {
        $user = $request->user();

        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'required|string',
            'address' => 'required|string'
        ]);

        $user->update($data);

        return response()->json([
            'status' => 200,
            'message' => 'Update user successfully',
            'data' => $user
        ], Response::HTTP_OK);
    }
}
