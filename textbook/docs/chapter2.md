## Module 2: ROS 2 - The Robotic Nervous System
### Module Overview
This module introduces ROS 2 as communication middleware...
### Learning Objectives
- Design ROS 2 architectures
- Implement communication patterns
- Create URDF models
### Key Concepts
- Nodes, topics, services, actions
- URDF, Xacro, robot description
- rclpy, ROS 2 Python integration

---
id: chapter2
title: "ROS 2: The Robotic Nervous System"
sidebar_position: 3
---

# Chapter 2: ROS 2: The Robotic Nervous System

If a humanoid robot is the body, then the Robot Operating System (ROS) is its nervous system. ROS 2 is an open-source, flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.

## 2.1 Why ROS 2?

ROS 1, its predecessor, revolutionized robotics by creating a standardized ecosystem. ROS 2 builds upon this success with significant improvements, making it ready for commercial and mission-critical applications.

*   **Real-Time Support:** Improved support for real-time control loops, essential for fast-moving robots.
*   **Multi-Platform:** Now officially supports Linux, macOS, and Windows.
*   **Improved Security:** Built-in security features to protect your robot from unauthorized access.
*   **Quality of Service (QoS):** Fine-grained control over the reliability and timing of communication between different parts of your system.

## 2.2 Core Concepts of ROS 2

ROS 2 applications are a graph of independent programs called **nodes**. These nodes communicate with each other using standard ROS 2 communication patterns.

### Nodes
A node is the smallest unit of execution in ROS 2. Each node should be responsible for a single, module purpose (e.g., one node for controlling the wheels, one node for reading a laser scanner).

### Topics
Topics are the primary mechanism for **asynchronous, one-to-many** communication. A node that wants to share information **publishes** messages to a topic. Other nodes can **subscribe** to that topic to receive the messages. This is like a public broadcast system.

*   **Example:** A camera driver node could publish raw image data to an `/image_raw` topic, while a separate image processing node subscribes to it.

```bash
# Command to see a list of active topics
ros2 topic list

# Command to echo messages from a topic
ros2 topic echo /image_raw
```

### Services
Services are used for **synchronous, request-response** communication. One node offers a service (the **server**), and another node can call that service (the **client**), wait for a response, and then continue. This is ideal for tasks that need a direct confirmation.

*   **Example:** A node might offer a `/compute_ik` service that takes a desired arm position and returns the required joint angles.

```bash
# Command to see a list of available services
ros2 service list

# Command to call a service from the command line
ros2 service call /compute_ik my_robot_interfaces/srv/SetPose "{x: 0.5, y: 0.2, z: 1.0}"
```

### Actions
Actions are for long-running, feedback-driven tasks. They are similar to services but provide continuous feedback during execution and are cancellable.

*   **Example:** An action server `/navigate_to_pose` could be used to command a mobile robot to a specific location. The action client would receive regular feedback on the robot's progress and could cancel the goal at any time.

## 2.3 The ROS 2 Command Line Interface (CLI)

The `ros2` command is your primary tool for interacting with and debugging a ROS 2 system. It provides a wide range of subcommands for inspecting topics, services, nodes, and more.

```bash
# Run a node
ros2 run <package_name> <executable_name>

# Inspect the node graph
ros2 node list
ros2 node info /my_node

# Inspect topics
ros2 topic list
ros2 topic info /my_topic
ros2 topic echo /my_topic
```

## 2.4 Launch Files: Building a System

A real robotics system consists of many nodes that must be started and configured correctly. ROS 2 **launch files** allow you to define a complex system in a single file, usually written in Python. You can start all your nodes, set their parameters, and even trigger events all at once.

```python
// Example of a simple launch file in Python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='image_tools',
            executable='cam2image',
            name='camera_node'
        ),
        Node(
            package='my_image_processor',
            executable='processor_node',
            name='image_processor_node',
            parameters=[{'threshold': 128}]
        ),
    ])
```

By mastering these core concepts, you will be able to build modular, scalable, and powerful robotics applications with ROS 2, forming the software backbone of your humanoid robot.